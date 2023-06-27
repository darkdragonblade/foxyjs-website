(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{441:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" Tools")]),t._v(" "),e("h3",{attrs:{id:"transformtool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transformtool"}},[t._v("#")]),t._v(" TransformTool")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const type = 'transform-tool';\nstage.toggleTool(type);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h6",{attrs:{id:"how-to-selectedelements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-selectedelements"}},[t._v("#")]),t._v(" How to selectedelements")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const rect = new SVGRect(config);\nstage.addGraph(rect);\nstage.selectedElements.set(rect);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h6",{attrs:{id:"how-to-clear-selectedelements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-clear-selectedelements"}},[t._v("#")]),t._v(" How to clear selectedElements？")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//clear one\nstage.selectedElements.delete(rect);\n//clearAll\nstage.selectedElements.clear();\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h6",{attrs:{id:"how-to-get-selectedelements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-selectedelements"}},[t._v("#")]),t._v(" How to get selectedElements？")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const elements = Array.from(stage.selectedElements.keys());\nconsole.log(elements);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h6",{attrs:{id:"how-to-get-selectedelementschange"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-selectedelementschange"}},[t._v("#")]),t._v(" How to get selectedelementschange？")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("stage.board.addEventListener('selectedelementschange',()=>{\n//do something\n});\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h6",{attrs:{id:"how-to-delete-selectedelements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-delete-selectedelements"}},[t._v("#")]),t._v(" How to delete selectedelements")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("stage.commands.delete();\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://darkdragonblade.github.io/foxyjs-svgeditor/static/transform-tool.gif",alt:"example"}})]),t._v(" "),e("h3",{attrs:{id:"shapetool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shapetool"}},[t._v("#")]),t._v(" ShapeTool")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const type = 'rect-tool';\nstage.toggleTool(type);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("NAME")]),t._v(" "),e("th",[t._v("TYPE")]),t._v(" "),e("th",[t._v("DESCRIBE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("rect-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw rect")])]),t._v(" "),e("tr",[e("td",[t._v("ellipse-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw ellipse")])]),t._v(" "),e("tr",[e("td",[t._v("text-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("add text or edit text")])]),t._v(" "),e("tr",[e("td",[t._v("triangle-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw triangle")])]),t._v(" "),e("tr",[e("td",[t._v("n-gon-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw trapezoid")])]),t._v(" "),e("tr",[e("td",[t._v("star-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw star")])]),t._v(" "),e("tr",[e("td",[t._v("cross-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw cross")])]),t._v(" "),e("tr",[e("td",[t._v("frame-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw frame")])]),t._v(" "),e("tr",[e("td",[t._v("ring-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw ring")])]),t._v(" "),e("tr",[e("td",[t._v("pie-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw pie")])]),t._v(" "),e("tr",[e("td",[t._v("crescent-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw crescent")])]),t._v(" "),e("tr",[e("td",[t._v("cog-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw cog")])]),t._v(" "),e("tr",[e("td",[t._v("spiral-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw spiral")])]),t._v(" "),e("tr",[e("td",[t._v("arrow-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("draw arrow")])]),t._v(" "),e("tr",[e("td",[t._v("frenhand-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("free draw")])]),t._v(" "),e("tr",[e("td",[t._v("pen-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("cubic bezier")])]),t._v(" "),e("tr",[e("td",[t._v("path-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("disabled")])]),t._v(" "),e("tr",[e("td",[t._v("line-tool")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("disabled")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);