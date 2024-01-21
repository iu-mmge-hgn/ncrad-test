import{_ as b}from"./nuxt-link.TZqjXMry.js";import{u as g,f as S,h as w,o as e,c as a,a as o,t as d,g as s,m as i,b as p,j as v,w as m,d as _,i as u,F as x,r as B}from"./entry.zjloayXd.js";import{q as $}from"./query.vOoCcTU2.js";import A from"./PriceStructure.p19WvZPd.js";import"./preview.CpsTgGfi.js";import"./StudyTable.ve_eQODH.js";const C={class:"available-sample-single"},N={class:"rvt-text-medium rvt-text-uppercase rvt-ts-md rvt-m-top-sm-md-up"},V=o("h2",{class:"rvt-ts-md"},"Study Subjects",-1),j=o("h2",{class:"rvt-ts-md"},"Available Data",-1),q=o("h2",{class:"rvt-ts-md"},"Available Biospecimens",-1),D={class:"samples-link-group"},P={key:0},F={key:1},L={key:1},I={__name:"Single",async setup(R){let r,h;const f=g(),{data:t}=([r,h]=S(()=>w(`content-available-samples-${f.fullPath}`,async()=>$().where({_path:f.fullPath}).findOne())),r=await r,h(),r);return(l,E)=>{var k;const n=b;return e(),a("div",C,[o("h1",N,d((k=s(t))==null?void 0:k.title),1),i(l.$slots,"summary"),V,i(l.$slots,"subjects"),j,i(l.$slots,"data"),q,i(l.$slots,"biospecimens"),o("ul",D,[p(A),o("li",null,[s(t).links.catalog?(e(),v(n,{key:0,href:"/access-samples/catalogs",class:"rvt-cta"},{default:m(()=>[_("Catalog")]),_:1})):u("",!0)]),s(t).links.biospecimens?(e(),a("li",P,[p(n,{href:s(t).links.biospecimens,class:"rvt-cta",target:"_blank"},{default:m(()=>[_("Request Access to Biospecimens")]),_:1},8,["href"])])):u("",!0),s(t).links.mop?(e(),a("li",F,[p(n,{href:s(t).links.mop,target:"_blank",class:"rvt-cta download"},{default:m(()=>[_("Study Specific Manual of Procedures")]),_:1},8,["href"])])):u("",!0),s(t).links.more?(e(!0),a(x,{key:2},B(s(t).links.more,(c,y)=>(e(),a("li",{key:y},[c.url?(e(),v(n,{key:0,href:c.url,class:"rvt-cta",target:"_blank"},{default:m(()=>[_(d(c.title),1)]),_:2},1032,["href"])):(e(),a("strong",L,d(c.text),1))]))),128)):u("",!0)])])}}};export{I as default};
