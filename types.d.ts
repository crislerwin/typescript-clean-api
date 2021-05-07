export type TsEslintPluginRules = Record<
  keyof typeof import('@typescript-eslint/eslint-plugin/dist/configs/all')['rules'],
  any
>;

export type EslintRules = import('eslint/lib/options').ESLintRules;
export type TsEslintRules = EslintRules & TsEslintPluginRules;

export type TsEslintConfig = {
  rules?: TsEslintRules;
};
