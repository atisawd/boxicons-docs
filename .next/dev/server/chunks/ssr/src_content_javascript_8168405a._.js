module.exports = [
"[project]/src/content/javascript/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    index: {
        title: 'Install JavaScript Package',
        display: 'hidden',
        theme: {
            breadcrumb: false,
            pagination: false,
            toc: false
        }
    },
    free: {
        title: 'NPM Package'
    },
    pro: {
        title: 'Pro Package'
    }
};
}),
"[project]/src/content/javascript/index.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mdx$2d$components$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mdx-components.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/cards.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BoxCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BoxCard.tsx [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "Vanilla JavaScript Package",
    "filePath": "src/content/javascript/index.mdx",
    "timestamp": 1771201386152
};
;
;
const sourceCode = "import { Cards } from 'nextra/components'\nimport {BoxCard} from '../../components/BoxCard'\nimport Link from 'next/link'\n\n# Vanilla JavaScript Package\n\nJavaScript icon library built from Boxicons SVG files with full tree-shaking support.\n\nThe library provides SVG string generation, DOM element creation, and auto-replacement functionality similar to Lucide icons. It includes basic and filled icon packs along with brands pack.\n\nThe Icon Components are Tree-shakable, so only the icons you import will be included in your final bundle.\n<br/>\n\n---\n<br/>\n<Cards >\n<BoxCard\n    icon={\n <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  \nfill=\"currentColor\" viewBox=\"0 0 24 24\" >\n<path d=\"M20 7h-1.21c.13-.41.21-.9.21-1.5C19 3.57 17.43 2 15.5 2c-1.62 0-2.7 1.48-3.4 3.09C11.41 3.58 10.27 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .6.08 1.09.21 1.5H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2m-4.5-3c.83 0 1.5.67 1.5 1.5C17 7 16.37 7 16 7h-2.48c.51-1.58 1.25-3 1.98-3M7 5.5C7 4.67 7.67 4 8.5 4c.89 0 1.71 1.53 2.2 3H8c-.37 0-1 0-1-1.5M5 13H4v7c0 1.1.9 2 2 2h5v-9zm13 0h-5v9h5c1.1 0 2-.9 2-2v-7z\"></path>\n</svg>}\n    title=\"Free Package\"\n    href=\"/javascript/free/install\"\n    description=\"Use basic and filled icon packs with the free version of Boxicons JavaScript package.\"\n  /><BoxCard\n    icon={ <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  \nfill=\"currentColor\" viewBox=\"0 0 24 24\" >\n<path d=\"M20.33 3.06a1 1 0 0 0-1.11.32L16 7.4l-3.22-4.02c-.38-.47-1.18-.47-1.56 0L8 7.4 4.78 3.38c-.27-.33-.71-.46-1.11-.32S3 3.58 3 4v11h18V4c0-.42-.27-.8-.67-.94M3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2H3z\"></path>\n</svg>\n  }\n    title=\"Pro Package\"\n    href=\"/javascript/pro/install\"\n    description=\"Use all icon packs, styles, and weights with the Pro version of Boxicons JavaScript package.\"\n  />\n</Cards>";
function useTOC(props) {
    return [];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        h1: "h1",
        hr: "hr",
        p: "p",
        path: "path",
        svg: "svg",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mdx$2d$components$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "Vanilla JavaScript Package"
            }, void 0, false, {
                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                lineNumber: 27,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "JavaScript icon library built from Boxicons SVG files with full tree-shaking support."
            }, void 0, false, {
                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                lineNumber: 27,
                columnNumber: 81
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "The library provides SVG string generation, DOM element creation, and auto-replacement functionality similar to Lucide icons. It includes basic and filled icon packs along with brands pack."
            }, void 0, false, {
                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                lineNumber: 27,
                columnNumber: 207
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "The Icon Components are Tree-shakable, so only the icons you import will be included in your final bundle."
            }, void 0, false, {
                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                lineNumber: 27,
                columnNumber: 437
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                lineNumber: 27,
                columnNumber: 584
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.hr, {}, void 0, false, {
                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                lineNumber: 27,
                columnNumber: 596
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                lineNumber: 27,
                columnNumber: 620
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cards"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BoxCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BoxCard"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.svg, {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.path, {
                                d: "M20 7h-1.21c.13-.41.21-.9.21-1.5C19 3.57 17.43 2 15.5 2c-1.62 0-2.7 1.48-3.4 3.09C11.41 3.58 10.27 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .6.08 1.09.21 1.5H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2m-4.5-3c.83 0 1.5.67 1.5 1.5C17 7 16.37 7 16 7h-2.48c.51-1.58 1.25-3 1.98-3M7 5.5C7 4.67 7.67 4 8.5 4c.89 0 1.71 1.53 2.2 3H8c-.37 0-1 0-1-1.5M5 13H4v7c0 1.1.9 2 2 2h5v-9zm13 0h-5v9h5c1.1 0 2-.9 2-2v-7z"
                            }, void 0, false, {
                                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                                lineNumber: 28,
                                columnNumber: 1
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/content/javascript/index.mdx.tsx",
                            lineNumber: 27,
                            columnNumber: 654
                        }, void 0),
                        title: "Free Package",
                        href: "/javascript/free/install",
                        description: "Use basic and filled icon packs with the free version of Boxicons JavaScript package."
                    }, void 0, false, {
                        fileName: "[project]/src/content/javascript/index.mdx.tsx",
                        lineNumber: 27,
                        columnNumber: 639
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BoxCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BoxCard"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.svg, {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.path, {
                                d: "M20.33 3.06a1 1 0 0 0-1.11.32L16 7.4l-3.22-4.02c-.38-.47-1.18-.47-1.56 0L8 7.4 4.78 3.38c-.27-.33-.71-.46-1.11-.32S3 3.58 3 4v11h18V4c0-.42-.27-.8-.67-.94M3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2H3z"
                            }, void 0, false, {
                                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 1
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/content/javascript/index.mdx.tsx",
                            lineNumber: 29,
                            columnNumber: 191
                        }, void 0),
                        title: "Pro Package",
                        href: "/javascript/pro/install",
                        description: "Use all icon packs, styles, and weights with the Pro version of Boxicons JavaScript package."
                    }, void 0, false, {
                        fileName: "[project]/src/content/javascript/index.mdx.tsx",
                        lineNumber: 29,
                        columnNumber: 176
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/content/javascript/index.mdx.tsx",
                lineNumber: 27,
                columnNumber: 632
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
];

//# sourceMappingURL=src_content_javascript_8168405a._.js.map