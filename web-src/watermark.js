import {mount,element,setMessage,setProgress,openPdf,downloadFile,safeStem} from "./common.js";
const app=mount({tool:"PDF-Watermark-Remover",title:"PDF Filigran İnceleme",subtitle:"Risk oluşturmadan filigran adayı analizi yapın.",description:"Web sürümü PDF metinlerini tarayıcıda inceler; filigran olabilecek tekrar eden büyük/yatık metinleri raporlar. Belge içeriğini DEĞİŞTİRMEZ.",accept:".pdf",action:"Filigran adaylarını incele",features:["Dosya sunucuya gitmeden tarayıcıda analiz edilir.","PDF'deki tekrar eden büyük metin parçaları belirlenmeye çalışılır.","Adaylar, sayfalar ve tekrar sayısı raporlanır.","İsteğe bağlı CSV raporu indirilir; özgün belge değiştirilmez.","Güvenli filigran kaldırma motoru henüz tarayıcıya taşınmadı."]});
element("extra").innerHTML='<p class="note"><strong>Önemli:</strong> Bu web sürümünde filigran silme bulunmaz. PDF metninin üzerine beyaz dikdörtgen çizmek gerçek kaldırma değildir ve hassas veriler için güvensizdir. İşlev olmayan bir “Temizle” düğmesi sunulmuyor.</p><div class="actions"><button id="csv" type="button" class="secondary" disabled>İnceleme raporunu indir (CSV)</button></div>';
let lines=[];
function escCSV(s){return '"'+String(s).replace(/"/g,'""')+'"';}
app.run=async file=>{
 const pdf=await openPdf(file);
 try{
  if(pdf.numPages>100)throw new Error("Web sürümünde en fazla 100 PDF sayfası analiz edilir.");
  const candidates=new Map();
  for(let n=1;n<=pdf.numPages;n++){
   const page=await pdf.getPage(n);
   const content=await page.getTextContent();
   for(const item of content.items){
    const t=(item.str||"").trim();if(t.length<4||!item.transform)continue;
    const [a,b,c,d,x,y]=item.transform;
    const size=Math.max(Math.hypot(a,b),Math.hypot(c,d));
    if(size<17)continue;
    const angled=Math.abs(Math.atan2(b,a)*180/Math.PI)>8;
    const key=t.toLocaleLowerCase("tr").replace(/\s+/g," ").slice(0,160);
    let itemData=candidates.get(key);
    if(!itemData){itemData={text:t,pages:new Set(),maxFont:0,angle:false};candidates.set(key,itemData);}
    itemData.pages.add(n);itemData.maxFont=Math.max(itemData.maxFont,size);itemData.angle ||= angled;
   }
   page.cleanup();setProgress(Math.round(n/pdf.numPages*100));
  }
  const threshold=pdf.numPages>2?2:1;
  lines=[...candidates.values()].filter(x=>x.pages.size>=threshold&&(x.angle||x.maxFont>27)).sort((a,b)=>b.pages.size-a.pages.size);
  const report=element("report");
  if(lines.length===0){
   report.textContent="Güçlü filigran adayı bulunamadı. Bu durum PDF'nin filigransız olduğunu kanıtlamaz; taranmış görsel filigranlarını bu analiz algılamaz.";
   setMessage("İnceleme tamamlandı. Güçlü aday bulunamadı; PDF değiştirilmedi.","ok");
  }else{
   report.textContent=lines.slice(0,60).map(x=>x.text+" · Sayfalar: "+[...x.pages].join(", ")+" · Tahmini yazı boyutu: "+x.maxFont.toFixed(0)).join("\n");
   setMessage(lines.length+" metin tabanlı filigran adayı gösterildi. Bu bir tahmindir; PDF değiştirilmedi.","ok");
  }
  element("csv").disabled=lines.length===0;
 }finally{await pdf.destroy().catch(()=>{});}
};
element("csv").addEventListener("click",()=>{
 if(!lines.length)return;
 const csv="Metin;Sayfalar;Yaklaşık boyut\r\n"+lines.map(x=>[escCSV(x.text),escCSV([...x.pages].join(",")),x.maxFont.toFixed(0)].join(";")).join("\r\n");
 downloadFile(new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),safeStem(app.file?.name)+"-filigran-adaylari.csv");
});
