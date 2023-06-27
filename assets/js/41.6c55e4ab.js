(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{457:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"各种工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各种工具"}},[t._v("#")]),t._v(" 各种工具")]),t._v(" "),s("h3",{attrs:{id:"变换工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变换工具"}},[t._v("#")]),t._v(" 变换工具")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const type = 'transform-tool';\nstage.toggleTool(type);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h6",{attrs:{id:"如何框选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何框选"}},[t._v("#")]),t._v(" 如何框选")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const rect = new SVGRect(config);\nstage.addGraph(rect);\nstage.selectedElements.set(rect);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h6",{attrs:{id:"如何清除框选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何清除框选"}},[t._v("#")]),t._v(" 如何清除框选")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//clear one\nstage.selectedElements.delete(rect);\n//clearAll\nstage.selectedElements.clear();\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h6",{attrs:{id:"如何获取框选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何获取框选"}},[t._v("#")]),t._v(" 如何获取框选")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const elements = Array.from(stage.selectedElements.keys());\nconsole.log(elements);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h6",{attrs:{id:"如何改变框选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何改变框选"}},[t._v("#")]),t._v(" 如何改变框选")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("stage.board.addEventListener('selectedelementschange',()=>{\n//do something\n});\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h6",{attrs:{id:"如何删除框选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何删除框选"}},[t._v("#")]),t._v(" 如何删除框选")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("stage.commands.delete();\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://darkdragonblade.github.io/foxyjs-svgeditor/static/transform-tool.gif",alt:"example"}})]),t._v(" "),s("h3",{attrs:{id:"图形工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图形工具"}},[t._v("#")]),t._v(" 图形工具")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const type = 'rect-tool';\nstage.toggleTool(type);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("rect-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw rect")])]),t._v(" "),s("tr",[s("td",[t._v("ellipse-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw ellipse")])]),t._v(" "),s("tr",[s("td",[t._v("text-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("add text or edit text")])]),t._v(" "),s("tr",[s("td",[t._v("triangle-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw triangle")])]),t._v(" "),s("tr",[s("td",[t._v("n-gon-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw trapezoid")])]),t._v(" "),s("tr",[s("td",[t._v("star-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw star")])]),t._v(" "),s("tr",[s("td",[t._v("cross-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw cross")])]),t._v(" "),s("tr",[s("td",[t._v("frame-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw frame")])]),t._v(" "),s("tr",[s("td",[t._v("ring-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw ring")])]),t._v(" "),s("tr",[s("td",[t._v("pie-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw pie")])]),t._v(" "),s("tr",[s("td",[t._v("crescent-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw crescent")])]),t._v(" "),s("tr",[s("td",[t._v("cog-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw cog")])]),t._v(" "),s("tr",[s("td",[t._v("spiral-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw spiral")])]),t._v(" "),s("tr",[s("td",[t._v("arrow-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("draw arrow")])]),t._v(" "),s("tr",[s("td",[t._v("frenhand-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("free draw")])]),t._v(" "),s("tr",[s("td",[t._v("pen-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("cubic bezier")])]),t._v(" "),s("tr",[s("td",[t._v("path-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("disabled")])]),t._v(" "),s("tr",[s("td",[t._v("line-tool")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("disabled")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);