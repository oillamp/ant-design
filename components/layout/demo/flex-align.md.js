webpackJsonp([240,359],{571:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(26),s(25)),o=t(p),e=(s(17),s(16)),c=t(e),l=s(1),u=t(l),k=s(2);t(k);n.exports={content:[["p","Flex \u5b50\u5143\u7d20\u5782\u76f4\u5bf9\u9f50\u3002"]],meta:{order:5,title:"Flex \u5bf9\u9f50",filename:"components/layout/demo/flex-align.md",id:"components-layout-demo-flex-align"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Row<span class="token punctuation" >,</span> Col <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> DemoBox <span class="token operator" >=</span> props <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`height-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>props<span class="token punctuation" >.</span>value<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>props<span class="token punctuation" >.</span>children<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u9876\u90e8\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex<span class="token punctuation" >"</span></span> <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>center<span class="token punctuation" >"</span></span> <span class="token attr-name" >align</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>top<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >100</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >120</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >80</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5c45\u4e2d\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex<span class="token punctuation" >"</span></span> <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>space-around<span class="token punctuation" >"</span></span> <span class="token attr-name" >align</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>middle<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >100</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >120</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >80</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5e95\u90e8\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex<span class="token punctuation" >"</span></span> <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>space-between<span class="token punctuation" >"</span></span> <span class="token attr-name" >align</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottom<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >100</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >120</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DemoBox</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >80</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DemoBox</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){return u["default"].createElement("p",{className:"height-"+n.value},n.children)};return u["default"].createElement("div",null,u["default"].createElement("p",null,"\u9876\u90e8\u5bf9\u9f50"),u["default"].createElement(o["default"],{type:"flex",justify:"center",align:"top"},u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:100},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:50},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:120},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:80},".ant-col-4"))),u["default"].createElement("p",null,"\u5c45\u4e2d\u5bf9\u9f50"),u["default"].createElement(o["default"],{type:"flex",justify:"space-around",align:"middle"},u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:100},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:50},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:120},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:80},".ant-col-4"))),u["default"].createElement("p",null,"\u5e95\u90e8\u5bf9\u9f50"),u["default"].createElement(o["default"],{type:"flex",justify:"space-between",align:"bottom"},u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:100},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:50},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:120},".ant-col-4")),u["default"].createElement(c["default"],{span:4},u["default"].createElement(n,{value:80},".ant-col-4"))))}}}});