// src/@types/regulex.d.ts
declare module 'regulex' {
  export function parse(pattern: string): any;
  export function visualize(
    pattern: string,
    flags?: string,
    options?: { svgOnly?: boolean }
  ): string;
  export default { parse: typeof parse, visualize: typeof visualize };
}
