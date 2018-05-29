/* flow-include

declare module 'stylelint' {
    declare module .exports: any
;
}
declare module 'stylelint/bin/stylelint' {
    declare module .exports: any
;
}
declare module 'stylelint/decls/postcss' {
    declare module .exports: any
;
}
declare module 'stylelint/decls/stylelint' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/assignDisabledRanges' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/augmentConfig' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/cli' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/createPlugin' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/createStylelint' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/createStylelintResult' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/dynamicRequire' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/formatters/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/formatters/jsonFormatter' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/formatters/needlessDisablesStringFormatter' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/formatters/stringFormatter' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/formatters/verboseFormatter' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/getConfigForFile' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/getPostcssResult' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/isPathIgnored' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/lintSource' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/needlessDisables' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/normalizeRuleSettings' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/postcssPlugin' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/reference/keywordSets' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/reference/namedColorData' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/reference/propertySets' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/reference/punctuationSets' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/reference/shorthandData' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-empty-line-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-name-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-name-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-name-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-no-unknown/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-no-vendor-prefix/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-semicolon-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-semicolon-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/at-rule-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/atRuleNameSpaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-closing-brace-empty-line-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-closing-brace-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-closing-brace-newline-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-closing-brace-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-closing-brace-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-no-empty/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-opening-brace-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-opening-brace-newline-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-opening-brace-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/block-opening-brace-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/color-hex-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/color-hex-length/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/color-named/generateColorFuncs' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/color-named/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/color-no-hex/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/color-no-invalid-hex/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/comment-empty-line-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/comment-no-empty/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/comment-whitespace-inside/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/comment-word-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/custom-media-pattern/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/custom-property-empty-line-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/custom-property-pattern/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-bang-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-bang-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-no-duplicate-properties/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-no-redundant-longhand-properties/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-no-shorthand-property-overrides/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-semicolon-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-semicolon-newline-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-semicolon-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-semicolon-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-single-line-max-declarations/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-block-trailing-semicolon/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-colon-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-colon-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-colon-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-empty-line-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-no-important/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-property-unit-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-property-unit-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-property-value-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declaration-property-value-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declarationBangSpaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/declarationColonSpaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/findMediaOperator' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/font-family-name-quotes/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/font-family-no-duplicate-names/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/font-family-no-missing-generic-family-keyword/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/font-weight-notation/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-calc-no-unspaced-operator/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-comma-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-comma-newline-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-comma-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-comma-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-linear-gradient-no-nonstandard-direction/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-max-empty-lines/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-name-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-parentheses-newline-inside/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-parentheses-space-inside/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-url-no-scheme-relative/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-url-quotes/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-url-scheme-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-url-scheme-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/function-whitespace-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/functionCommaSpaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/indentation/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/keyframe-declaration-no-important/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/length-zero-no-unit/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/max-empty-lines/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/max-line-length/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/max-nesting-depth/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-colon-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-colon-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-name-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-name-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-name-no-unknown/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-name-no-vendor-prefix/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-name-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-parentheses-space-inside/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-range-operator-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-feature-range-operator-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-query-list-comma-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-query-list-comma-newline-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-query-list-comma-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/media-query-list-comma-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/mediaFeatureColonSpaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/mediaQueryListCommaWhitespaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-descending-specificity/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-duplicate-at-import-rules/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-duplicate-selectors/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-empty-source/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-eol-whitespace/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-extra-semicolons/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-invalid-double-slash-comments/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-missing-end-of-source-newline/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/no-unknown-animations/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/number-leading-zero/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/number-max-precision/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/number-no-trailing-zeros/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/property-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/property-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/property-no-unknown/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/property-no-vendor-prefix/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/property-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/rule-empty-line-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-attribute-brackets-space-inside/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-attribute-operator-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-attribute-operator-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-attribute-operator-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-attribute-operator-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-attribute-quotes/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-class-pattern/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-combinator-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-combinator-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-descendant-combinator-no-non-space/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-id-pattern/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-list-comma-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-list-comma-newline-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-list-comma-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-list-comma-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-attribute/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-class/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-combinators/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-compound-selectors/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-empty-lines/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-id/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-specificity/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-type/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-max-universal/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-nested-pattern/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-no-qualifying-type/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-no-vendor-prefix/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-no-unknown/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-parentheses-space-inside/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-pseudo-element-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-pseudo-element-colon-notation/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-pseudo-element-no-unknown/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-type-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selector-type-no-unknown/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selectorAttributeOperatorSpaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selectorCombinatorSpaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/selectorListCommaWhitespaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/shorthand-property-no-redundant-values/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/string-no-newline/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/string-quotes/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/time-min-milliseconds/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/unit-blacklist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/unit-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/unit-no-unknown/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/unit-whitelist/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/value-keyword-case/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/value-list-comma-newline-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/value-list-comma-newline-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/value-list-comma-space-after/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/value-list-comma-space-before/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/value-list-max-empty-lines/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/value-no-vendor-prefix/index' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/rules/valueListCommaWhitespaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/standalone' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/testUtils/basicChecks' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/testUtils/createRuleTester' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/testUtils/mergeTestDescriptions' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/addEmptyLineBefore' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/atRuleParamIndex' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/beforeBlockString' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/blockString' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/blurComments' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/blurFunctionArguments' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/blurInterpolation' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/checkAgainstRule' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/configurationError' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/containsString' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/declarationValueIndex' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/FileCache' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/findAnimationName' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/findAtRuleContext' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/findFontFamily' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/findListStyleType' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/functionArgumentsSearch' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/getCacheFile' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/getModulePath' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/getNextNonSharedLineCommentNode' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/getOsEol' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/getPreviousNonSharedLineCommentNode' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/getSchemeFromUrl' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/getUnitFromValueNode' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/hasBlock' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/hasEmptyBlock' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/hasEmptyLine' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/hash' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/hasInterpolation' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/hasLessInterpolation' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/hasPsvInterpolation' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/hasScssInterpolation' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isAfterComment' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isAfterSingleLineComment' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isAfterStandardPropertyDeclaration' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isAutoprefixable' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isBlocklessAtRuleAfterBlocklessAtRule' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isBlocklessAtRuleAfterSameNameBlocklessAtRule' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isCounterIncrementCustomIdentValue' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isCounterResetCustomIdentValue' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isCustomElement' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isCustomMediaQuery' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isCustomProperty' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isCustomPropertySet' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isCustomSelector' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isFirstNested' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isFirstNodeOfRoot' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isKeyframeRule' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isKeyframeSelector' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isNumbery' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isOnlyWhitespace' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isRangeContextMediaFeature' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isSharedLineComment' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isSingleLineString' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxAtRule' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxDeclaration' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxFunction' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxMediaFeature' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxMediaFeatureName' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxProperty' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxRule' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxSelector' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxTypeSelector' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxUrl' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxValue' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isValidFontSize' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isValidHex' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isVariable' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/isWhitespace' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/matchesStringOrRegExp' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/nextNonCommentNode' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/nodeContextLookup' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/optionsMatches' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/parseSelector' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/rawNodeString' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/removeEmptyLinesBefore' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/report' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/ruleMessages' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/validateObjectWithStringArrayProps' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/validateOptions' {
    declare module .exports: any
;
}
declare module 'stylelint/lib/utils/whitespaceChecker' {
    declare module .exports: any
;
}
declare module 'stylelint/bin/stylelint.js' {
    declare module .exports: $Exports<'stylelint/bin/stylelint'>
;
}
declare module 'stylelint/decls/postcss.js' {
    declare module .exports: $Exports<'stylelint/decls/postcss'>
;
}
declare module 'stylelint/decls/stylelint.js' {
    declare module .exports: $Exports<'stylelint/decls/stylelint'>
;
}
declare module 'stylelint/lib/assignDisabledRanges.js' {
    declare module .exports: $Exports<'stylelint/lib/assignDisabledRanges'>
;
}
declare module 'stylelint/lib/augmentConfig.js' {
    declare module .exports: $Exports<'stylelint/lib/augmentConfig'>
;
}
declare module 'stylelint/lib/cli.js' {
    declare module .exports: $Exports<'stylelint/lib/cli'>
;
}
declare module 'stylelint/lib/createPlugin.js' {
    declare module .exports: $Exports<'stylelint/lib/createPlugin'>
;
}
declare module 'stylelint/lib/createStylelint.js' {
    declare module .exports: $Exports<'stylelint/lib/createStylelint'>
;
}
declare module 'stylelint/lib/createStylelintResult.js' {
    declare module .exports: $Exports<'stylelint/lib/createStylelintResult'>
;
}
declare module 'stylelint/lib/dynamicRequire.js' {
    declare module .exports: $Exports<'stylelint/lib/dynamicRequire'>
;
}
declare module 'stylelint/lib/formatters/index.js' {
    declare module .exports: $Exports<'stylelint/lib/formatters/index'>
;
}
declare module 'stylelint/lib/formatters/jsonFormatter.js' {
    declare module .exports: $Exports<'stylelint/lib/formatters/jsonFormatter'>
;
}
declare module 'stylelint/lib/formatters/needlessDisablesStringFormatter.js' {
    declare module .exports: $Exports<'stylelint/lib/formatters/needlessDisablesStringFormatter'>
;
}
declare module 'stylelint/lib/formatters/stringFormatter.js' {
    declare module .exports: $Exports<'stylelint/lib/formatters/stringFormatter'>
;
}
declare module 'stylelint/lib/formatters/verboseFormatter.js' {
    declare module .exports: $Exports<'stylelint/lib/formatters/verboseFormatter'>
;
}
declare module 'stylelint/lib/getConfigForFile.js' {
    declare module .exports: $Exports<'stylelint/lib/getConfigForFile'>
;
}
declare module 'stylelint/lib/getPostcssResult.js' {
    declare module .exports: $Exports<'stylelint/lib/getPostcssResult'>
;
}
declare module 'stylelint/lib/index.js' {
    declare module .exports: $Exports<'stylelint/lib/index'>
;
}
declare module 'stylelint/lib/isPathIgnored.js' {
    declare module .exports: $Exports<'stylelint/lib/isPathIgnored'>
;
}
declare module 'stylelint/lib/lintSource.js' {
    declare module .exports: $Exports<'stylelint/lib/lintSource'>
;
}
declare module 'stylelint/lib/needlessDisables.js' {
    declare module .exports: $Exports<'stylelint/lib/needlessDisables'>
;
}
declare module 'stylelint/lib/normalizeRuleSettings.js' {
    declare module .exports: $Exports<'stylelint/lib/normalizeRuleSettings'>
;
}
declare module 'stylelint/lib/postcssPlugin.js' {
    declare module .exports: $Exports<'stylelint/lib/postcssPlugin'>
;
}
declare module 'stylelint/lib/reference/keywordSets.js' {
    declare module .exports: $Exports<'stylelint/lib/reference/keywordSets'>
;
}
declare module 'stylelint/lib/reference/namedColorData.js' {
    declare module .exports: $Exports<'stylelint/lib/reference/namedColorData'>
;
}
declare module 'stylelint/lib/reference/propertySets.js' {
    declare module .exports: $Exports<'stylelint/lib/reference/propertySets'>
;
}
declare module 'stylelint/lib/reference/punctuationSets.js' {
    declare module .exports: $Exports<'stylelint/lib/reference/punctuationSets'>
;
}
declare module 'stylelint/lib/reference/shorthandData.js' {
    declare module .exports: $Exports<'stylelint/lib/reference/shorthandData'>
;
}
declare module 'stylelint/lib/rules/at-rule-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-empty-line-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-empty-line-before/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-name-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-name-case/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-name-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-name-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-name-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-name-space-after/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-no-unknown/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-no-unknown/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-no-vendor-prefix/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-no-vendor-prefix/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-semicolon-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-semicolon-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-semicolon-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-semicolon-space-before/index'>
;
}
declare module 'stylelint/lib/rules/at-rule-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/at-rule-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/atRuleNameSpaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/atRuleNameSpaceChecker'>
;
}
declare module 'stylelint/lib/rules/block-closing-brace-empty-line-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-closing-brace-empty-line-before/index'>
;
}
declare module 'stylelint/lib/rules/block-closing-brace-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-closing-brace-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/block-closing-brace-newline-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-closing-brace-newline-before/index'>
;
}
declare module 'stylelint/lib/rules/block-closing-brace-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-closing-brace-space-after/index'>
;
}
declare module 'stylelint/lib/rules/block-closing-brace-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-closing-brace-space-before/index'>
;
}
declare module 'stylelint/lib/rules/block-no-empty/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-no-empty/index'>
;
}
declare module 'stylelint/lib/rules/block-opening-brace-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-opening-brace-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/block-opening-brace-newline-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-opening-brace-newline-before/index'>
;
}
declare module 'stylelint/lib/rules/block-opening-brace-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-opening-brace-space-after/index'>
;
}
declare module 'stylelint/lib/rules/block-opening-brace-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/block-opening-brace-space-before/index'>
;
}
declare module 'stylelint/lib/rules/color-hex-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/color-hex-case/index'>
;
}
declare module 'stylelint/lib/rules/color-hex-length/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/color-hex-length/index'>
;
}
declare module 'stylelint/lib/rules/color-named/generateColorFuncs.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/color-named/generateColorFuncs'>
;
}
declare module 'stylelint/lib/rules/color-named/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/color-named/index'>
;
}
declare module 'stylelint/lib/rules/color-no-hex/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/color-no-hex/index'>
;
}
declare module 'stylelint/lib/rules/color-no-invalid-hex/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/color-no-invalid-hex/index'>
;
}
declare module 'stylelint/lib/rules/comment-empty-line-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/comment-empty-line-before/index'>
;
}
declare module 'stylelint/lib/rules/comment-no-empty/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/comment-no-empty/index'>
;
}
declare module 'stylelint/lib/rules/comment-whitespace-inside/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/comment-whitespace-inside/index'>
;
}
declare module 'stylelint/lib/rules/comment-word-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/comment-word-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/custom-media-pattern/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/custom-media-pattern/index'>
;
}
declare module 'stylelint/lib/rules/custom-property-empty-line-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/custom-property-empty-line-before/index'>
;
}
declare module 'stylelint/lib/rules/custom-property-pattern/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/custom-property-pattern/index'>
;
}
declare module 'stylelint/lib/rules/declaration-bang-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-bang-space-after/index'>
;
}
declare module 'stylelint/lib/rules/declaration-bang-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-bang-space-before/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-no-duplicate-properties/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-no-duplicate-properties/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-no-redundant-longhand-properties/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-no-redundant-longhand-properties/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-no-shorthand-property-overrides/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-no-shorthand-property-overrides/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-semicolon-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-semicolon-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-semicolon-newline-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-semicolon-newline-before/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-semicolon-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-semicolon-space-after/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-semicolon-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-semicolon-space-before/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-single-line-max-declarations/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-single-line-max-declarations/index'>
;
}
declare module 'stylelint/lib/rules/declaration-block-trailing-semicolon/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-block-trailing-semicolon/index'>
;
}
declare module 'stylelint/lib/rules/declaration-colon-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-colon-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/declaration-colon-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-colon-space-after/index'>
;
}
declare module 'stylelint/lib/rules/declaration-colon-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-colon-space-before/index'>
;
}
declare module 'stylelint/lib/rules/declaration-empty-line-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-empty-line-before/index'>
;
}
declare module 'stylelint/lib/rules/declaration-no-important/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-no-important/index'>
;
}
declare module 'stylelint/lib/rules/declaration-property-unit-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-property-unit-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/declaration-property-unit-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-property-unit-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/declaration-property-value-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-property-value-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/declaration-property-value-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declaration-property-value-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/declarationBangSpaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declarationBangSpaceChecker'>
;
}
declare module 'stylelint/lib/rules/declarationColonSpaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/declarationColonSpaceChecker'>
;
}
declare module 'stylelint/lib/rules/findMediaOperator.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/findMediaOperator'>
;
}
declare module 'stylelint/lib/rules/font-family-name-quotes/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/font-family-name-quotes/index'>
;
}
declare module 'stylelint/lib/rules/font-family-no-duplicate-names/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/font-family-no-duplicate-names/index'>
;
}
declare module 'stylelint/lib/rules/font-family-no-missing-generic-family-keyword/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/font-family-no-missing-generic-family-keyword/index'>
;
}
declare module 'stylelint/lib/rules/font-weight-notation/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/font-weight-notation/index'>
;
}
declare module 'stylelint/lib/rules/function-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/function-calc-no-unspaced-operator/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-calc-no-unspaced-operator/index'>
;
}
declare module 'stylelint/lib/rules/function-comma-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-comma-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/function-comma-newline-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-comma-newline-before/index'>
;
}
declare module 'stylelint/lib/rules/function-comma-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-comma-space-after/index'>
;
}
declare module 'stylelint/lib/rules/function-comma-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-comma-space-before/index'>
;
}
declare module 'stylelint/lib/rules/function-linear-gradient-no-nonstandard-direction/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-linear-gradient-no-nonstandard-direction/index'>
;
}
declare module 'stylelint/lib/rules/function-max-empty-lines/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-max-empty-lines/index'>
;
}
declare module 'stylelint/lib/rules/function-name-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-name-case/index'>
;
}
declare module 'stylelint/lib/rules/function-parentheses-newline-inside/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-parentheses-newline-inside/index'>
;
}
declare module 'stylelint/lib/rules/function-parentheses-space-inside/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-parentheses-space-inside/index'>
;
}
declare module 'stylelint/lib/rules/function-url-no-scheme-relative/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-url-no-scheme-relative/index'>
;
}
declare module 'stylelint/lib/rules/function-url-quotes/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-url-quotes/index'>
;
}
declare module 'stylelint/lib/rules/function-url-scheme-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-url-scheme-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/function-url-scheme-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-url-scheme-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/function-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/function-whitespace-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/function-whitespace-after/index'>
;
}
declare module 'stylelint/lib/rules/functionCommaSpaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/functionCommaSpaceChecker'>
;
}
declare module 'stylelint/lib/rules/indentation/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/indentation/index'>
;
}
declare module 'stylelint/lib/rules/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/index'>
;
}
declare module 'stylelint/lib/rules/keyframe-declaration-no-important/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/keyframe-declaration-no-important/index'>
;
}
declare module 'stylelint/lib/rules/length-zero-no-unit/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/length-zero-no-unit/index'>
;
}
declare module 'stylelint/lib/rules/max-empty-lines/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/max-empty-lines/index'>
;
}
declare module 'stylelint/lib/rules/max-line-length/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/max-line-length/index'>
;
}
declare module 'stylelint/lib/rules/max-nesting-depth/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/max-nesting-depth/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-colon-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-colon-space-after/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-colon-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-colon-space-before/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-name-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-name-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-name-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-name-case/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-name-no-unknown/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-name-no-unknown/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-name-no-vendor-prefix/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-name-no-vendor-prefix/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-name-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-name-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-parentheses-space-inside/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-parentheses-space-inside/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-range-operator-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-range-operator-space-after/index'>
;
}
declare module 'stylelint/lib/rules/media-feature-range-operator-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-feature-range-operator-space-before/index'>
;
}
declare module 'stylelint/lib/rules/media-query-list-comma-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-query-list-comma-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/media-query-list-comma-newline-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-query-list-comma-newline-before/index'>
;
}
declare module 'stylelint/lib/rules/media-query-list-comma-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-query-list-comma-space-after/index'>
;
}
declare module 'stylelint/lib/rules/media-query-list-comma-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/media-query-list-comma-space-before/index'>
;
}
declare module 'stylelint/lib/rules/mediaFeatureColonSpaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/mediaFeatureColonSpaceChecker'>
;
}
declare module 'stylelint/lib/rules/mediaQueryListCommaWhitespaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/mediaQueryListCommaWhitespaceChecker'>
;
}
declare module 'stylelint/lib/rules/no-descending-specificity/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-descending-specificity/index'>
;
}
declare module 'stylelint/lib/rules/no-duplicate-at-import-rules/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-duplicate-at-import-rules/index'>
;
}
declare module 'stylelint/lib/rules/no-duplicate-selectors/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-duplicate-selectors/index'>
;
}
declare module 'stylelint/lib/rules/no-empty-source/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-empty-source/index'>
;
}
declare module 'stylelint/lib/rules/no-eol-whitespace/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-eol-whitespace/index'>
;
}
declare module 'stylelint/lib/rules/no-extra-semicolons/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-extra-semicolons/index'>
;
}
declare module 'stylelint/lib/rules/no-invalid-double-slash-comments/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-invalid-double-slash-comments/index'>
;
}
declare module 'stylelint/lib/rules/no-missing-end-of-source-newline/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-missing-end-of-source-newline/index'>
;
}
declare module 'stylelint/lib/rules/no-unknown-animations/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/no-unknown-animations/index'>
;
}
declare module 'stylelint/lib/rules/number-leading-zero/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/number-leading-zero/index'>
;
}
declare module 'stylelint/lib/rules/number-max-precision/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/number-max-precision/index'>
;
}
declare module 'stylelint/lib/rules/number-no-trailing-zeros/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/number-no-trailing-zeros/index'>
;
}
declare module 'stylelint/lib/rules/property-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/property-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/property-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/property-case/index'>
;
}
declare module 'stylelint/lib/rules/property-no-unknown/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/property-no-unknown/index'>
;
}
declare module 'stylelint/lib/rules/property-no-vendor-prefix/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/property-no-vendor-prefix/index'>
;
}
declare module 'stylelint/lib/rules/property-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/property-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/rule-empty-line-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/rule-empty-line-before/index'>
;
}
declare module 'stylelint/lib/rules/selector-attribute-brackets-space-inside/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-attribute-brackets-space-inside/index'>
;
}
declare module 'stylelint/lib/rules/selector-attribute-operator-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-attribute-operator-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/selector-attribute-operator-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-attribute-operator-space-after/index'>
;
}
declare module 'stylelint/lib/rules/selector-attribute-operator-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-attribute-operator-space-before/index'>
;
}
declare module 'stylelint/lib/rules/selector-attribute-operator-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-attribute-operator-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/selector-attribute-quotes/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-attribute-quotes/index'>
;
}
declare module 'stylelint/lib/rules/selector-class-pattern/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-class-pattern/index'>
;
}
declare module 'stylelint/lib/rules/selector-combinator-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-combinator-space-after/index'>
;
}
declare module 'stylelint/lib/rules/selector-combinator-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-combinator-space-before/index'>
;
}
declare module 'stylelint/lib/rules/selector-descendant-combinator-no-non-space/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-descendant-combinator-no-non-space/index'>
;
}
declare module 'stylelint/lib/rules/selector-id-pattern/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-id-pattern/index'>
;
}
declare module 'stylelint/lib/rules/selector-list-comma-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-list-comma-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/selector-list-comma-newline-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-list-comma-newline-before/index'>
;
}
declare module 'stylelint/lib/rules/selector-list-comma-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-list-comma-space-after/index'>
;
}
declare module 'stylelint/lib/rules/selector-list-comma-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-list-comma-space-before/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-attribute/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-attribute/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-class/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-class/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-combinators/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-combinators/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-compound-selectors/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-compound-selectors/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-empty-lines/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-empty-lines/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-id/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-id/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-specificity/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-specificity/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-type/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-type/index'>
;
}
declare module 'stylelint/lib/rules/selector-max-universal/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-max-universal/index'>
;
}
declare module 'stylelint/lib/rules/selector-nested-pattern/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-nested-pattern/index'>
;
}
declare module 'stylelint/lib/rules/selector-no-qualifying-type/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-no-qualifying-type/index'>
;
}
declare module 'stylelint/lib/rules/selector-no-vendor-prefix/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-no-vendor-prefix/index'>
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-pseudo-class-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-pseudo-class-case/index'>
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-no-unknown/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-pseudo-class-no-unknown/index'>
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-parentheses-space-inside/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-pseudo-class-parentheses-space-inside/index'>
;
}
declare module 'stylelint/lib/rules/selector-pseudo-class-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-pseudo-class-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/selector-pseudo-element-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-pseudo-element-case/index'>
;
}
declare module 'stylelint/lib/rules/selector-pseudo-element-colon-notation/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-pseudo-element-colon-notation/index'>
;
}
declare module 'stylelint/lib/rules/selector-pseudo-element-no-unknown/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-pseudo-element-no-unknown/index'>
;
}
declare module 'stylelint/lib/rules/selector-type-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-type-case/index'>
;
}
declare module 'stylelint/lib/rules/selector-type-no-unknown/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selector-type-no-unknown/index'>
;
}
declare module 'stylelint/lib/rules/selectorAttributeOperatorSpaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selectorAttributeOperatorSpaceChecker'>
;
}
declare module 'stylelint/lib/rules/selectorCombinatorSpaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selectorCombinatorSpaceChecker'>
;
}
declare module 'stylelint/lib/rules/selectorListCommaWhitespaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/selectorListCommaWhitespaceChecker'>
;
}
declare module 'stylelint/lib/rules/shorthand-property-no-redundant-values/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/shorthand-property-no-redundant-values/index'>
;
}
declare module 'stylelint/lib/rules/string-no-newline/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/string-no-newline/index'>
;
}
declare module 'stylelint/lib/rules/string-quotes/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/string-quotes/index'>
;
}
declare module 'stylelint/lib/rules/time-min-milliseconds/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/time-min-milliseconds/index'>
;
}
declare module 'stylelint/lib/rules/unit-blacklist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/unit-blacklist/index'>
;
}
declare module 'stylelint/lib/rules/unit-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/unit-case/index'>
;
}
declare module 'stylelint/lib/rules/unit-no-unknown/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/unit-no-unknown/index'>
;
}
declare module 'stylelint/lib/rules/unit-whitelist/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/unit-whitelist/index'>
;
}
declare module 'stylelint/lib/rules/value-keyword-case/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/value-keyword-case/index'>
;
}
declare module 'stylelint/lib/rules/value-list-comma-newline-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/value-list-comma-newline-after/index'>
;
}
declare module 'stylelint/lib/rules/value-list-comma-newline-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/value-list-comma-newline-before/index'>
;
}
declare module 'stylelint/lib/rules/value-list-comma-space-after/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/value-list-comma-space-after/index'>
;
}
declare module 'stylelint/lib/rules/value-list-comma-space-before/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/value-list-comma-space-before/index'>
;
}
declare module 'stylelint/lib/rules/value-list-max-empty-lines/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/value-list-max-empty-lines/index'>
;
}
declare module 'stylelint/lib/rules/value-no-vendor-prefix/index.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/value-no-vendor-prefix/index'>
;
}
declare module 'stylelint/lib/rules/valueListCommaWhitespaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/rules/valueListCommaWhitespaceChecker'>
;
}
declare module 'stylelint/lib/standalone.js' {
    declare module .exports: $Exports<'stylelint/lib/standalone'>
;
}
declare module 'stylelint/lib/testUtils/basicChecks.js' {
    declare module .exports: $Exports<'stylelint/lib/testUtils/basicChecks'>
;
}
declare module 'stylelint/lib/testUtils/createRuleTester.js' {
    declare module .exports: $Exports<'stylelint/lib/testUtils/createRuleTester'>
;
}
declare module 'stylelint/lib/testUtils/mergeTestDescriptions.js' {
    declare module .exports: $Exports<'stylelint/lib/testUtils/mergeTestDescriptions'>
;
}
declare module 'stylelint/lib/utils/addEmptyLineBefore.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/addEmptyLineBefore'>
;
}
declare module 'stylelint/lib/utils/atRuleParamIndex.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/atRuleParamIndex'>
;
}
declare module 'stylelint/lib/utils/beforeBlockString.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/beforeBlockString'>
;
}
declare module 'stylelint/lib/utils/blockString.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/blockString'>
;
}
declare module 'stylelint/lib/utils/blurComments.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/blurComments'>
;
}
declare module 'stylelint/lib/utils/blurFunctionArguments.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/blurFunctionArguments'>
;
}
declare module 'stylelint/lib/utils/blurInterpolation.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/blurInterpolation'>
;
}
declare module 'stylelint/lib/utils/checkAgainstRule.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/checkAgainstRule'>
;
}
declare module 'stylelint/lib/utils/configurationError.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/configurationError'>
;
}
declare module 'stylelint/lib/utils/containsString.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/containsString'>
;
}
declare module 'stylelint/lib/utils/declarationValueIndex.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/declarationValueIndex'>
;
}
declare module 'stylelint/lib/utils/FileCache.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/FileCache'>
;
}
declare module 'stylelint/lib/utils/findAnimationName.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/findAnimationName'>
;
}
declare module 'stylelint/lib/utils/findAtRuleContext.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/findAtRuleContext'>
;
}
declare module 'stylelint/lib/utils/findFontFamily.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/findFontFamily'>
;
}
declare module 'stylelint/lib/utils/findListStyleType.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/findListStyleType'>
;
}
declare module 'stylelint/lib/utils/functionArgumentsSearch.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/functionArgumentsSearch'>
;
}
declare module 'stylelint/lib/utils/getCacheFile.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/getCacheFile'>
;
}
declare module 'stylelint/lib/utils/getModulePath.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/getModulePath'>
;
}
declare module 'stylelint/lib/utils/getNextNonSharedLineCommentNode.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/getNextNonSharedLineCommentNode'>
;
}
declare module 'stylelint/lib/utils/getOsEol.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/getOsEol'>
;
}
declare module 'stylelint/lib/utils/getPreviousNonSharedLineCommentNode.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/getPreviousNonSharedLineCommentNode'>
;
}
declare module 'stylelint/lib/utils/getSchemeFromUrl.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/getSchemeFromUrl'>
;
}
declare module 'stylelint/lib/utils/getUnitFromValueNode.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/getUnitFromValueNode'>
;
}
declare module 'stylelint/lib/utils/hasBlock.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/hasBlock'>
;
}
declare module 'stylelint/lib/utils/hasEmptyBlock.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/hasEmptyBlock'>
;
}
declare module 'stylelint/lib/utils/hasEmptyLine.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/hasEmptyLine'>
;
}
declare module 'stylelint/lib/utils/hash.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/hash'>
;
}
declare module 'stylelint/lib/utils/hasInterpolation.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/hasInterpolation'>
;
}
declare module 'stylelint/lib/utils/hasLessInterpolation.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/hasLessInterpolation'>
;
}
declare module 'stylelint/lib/utils/hasPsvInterpolation.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/hasPsvInterpolation'>
;
}
declare module 'stylelint/lib/utils/hasScssInterpolation.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/hasScssInterpolation'>
;
}
declare module 'stylelint/lib/utils/isAfterComment.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isAfterComment'>
;
}
declare module 'stylelint/lib/utils/isAfterSingleLineComment.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isAfterSingleLineComment'>
;
}
declare module 'stylelint/lib/utils/isAfterStandardPropertyDeclaration.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isAfterStandardPropertyDeclaration'>
;
}
declare module 'stylelint/lib/utils/isAutoprefixable.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isAutoprefixable'>
;
}
declare module 'stylelint/lib/utils/isBlocklessAtRuleAfterBlocklessAtRule.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isBlocklessAtRuleAfterBlocklessAtRule'>
;
}
declare module 'stylelint/lib/utils/isBlocklessAtRuleAfterSameNameBlocklessAtRule.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isBlocklessAtRuleAfterSameNameBlocklessAtRule'>
;
}
declare module 'stylelint/lib/utils/isCounterIncrementCustomIdentValue.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isCounterIncrementCustomIdentValue'>
;
}
declare module 'stylelint/lib/utils/isCounterResetCustomIdentValue.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isCounterResetCustomIdentValue'>
;
}
declare module 'stylelint/lib/utils/isCustomElement.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isCustomElement'>
;
}
declare module 'stylelint/lib/utils/isCustomMediaQuery.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isCustomMediaQuery'>
;
}
declare module 'stylelint/lib/utils/isCustomProperty.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isCustomProperty'>
;
}
declare module 'stylelint/lib/utils/isCustomPropertySet.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isCustomPropertySet'>
;
}
declare module 'stylelint/lib/utils/isCustomSelector.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isCustomSelector'>
;
}
declare module 'stylelint/lib/utils/isFirstNested.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isFirstNested'>
;
}
declare module 'stylelint/lib/utils/isFirstNodeOfRoot.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isFirstNodeOfRoot'>
;
}
declare module 'stylelint/lib/utils/isKeyframeRule.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isKeyframeRule'>
;
}
declare module 'stylelint/lib/utils/isKeyframeSelector.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isKeyframeSelector'>
;
}
declare module 'stylelint/lib/utils/isNumbery.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isNumbery'>
;
}
declare module 'stylelint/lib/utils/isOnlyWhitespace.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isOnlyWhitespace'>
;
}
declare module 'stylelint/lib/utils/isRangeContextMediaFeature.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isRangeContextMediaFeature'>
;
}
declare module 'stylelint/lib/utils/isSharedLineComment.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isSharedLineComment'>
;
}
declare module 'stylelint/lib/utils/isSingleLineString.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isSingleLineString'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxAtRule.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxAtRule'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxDeclaration.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxDeclaration'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxFunction.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxFunction'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxMediaFeature.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxMediaFeature'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxMediaFeatureName.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxMediaFeatureName'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxProperty.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxProperty'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxRule.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxRule'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxSelector.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxSelector'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxTypeSelector.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxTypeSelector'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxUrl.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxUrl'>
;
}
declare module 'stylelint/lib/utils/isStandardSyntaxValue.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isStandardSyntaxValue'>
;
}
declare module 'stylelint/lib/utils/isValidFontSize.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isValidFontSize'>
;
}
declare module 'stylelint/lib/utils/isValidHex.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isValidHex'>
;
}
declare module 'stylelint/lib/utils/isVariable.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isVariable'>
;
}
declare module 'stylelint/lib/utils/isWhitespace.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/isWhitespace'>
;
}
declare module 'stylelint/lib/utils/matchesStringOrRegExp.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/matchesStringOrRegExp'>
;
}
declare module 'stylelint/lib/utils/nextNonCommentNode.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/nextNonCommentNode'>
;
}
declare module 'stylelint/lib/utils/nodeContextLookup.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/nodeContextLookup'>
;
}
declare module 'stylelint/lib/utils/optionsMatches.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/optionsMatches'>
;
}
declare module 'stylelint/lib/utils/parseSelector.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/parseSelector'>
;
}
declare module 'stylelint/lib/utils/rawNodeString.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/rawNodeString'>
;
}
declare module 'stylelint/lib/utils/removeEmptyLinesBefore.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/removeEmptyLinesBefore'>
;
}
declare module 'stylelint/lib/utils/report.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/report'>
;
}
declare module 'stylelint/lib/utils/ruleMessages.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/ruleMessages'>
;
}
declare module 'stylelint/lib/utils/validateObjectWithStringArrayProps.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/validateObjectWithStringArrayProps'>
;
}
declare module 'stylelint/lib/utils/validateOptions.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/validateOptions'>
;
}
declare module 'stylelint/lib/utils/whitespaceChecker.js' {
    declare module .exports: $Exports<'stylelint/lib/utils/whitespaceChecker'>
;
}

*/
