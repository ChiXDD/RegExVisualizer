// src/@types/railroad-diagrams.d.ts
declare module 'railroad-diagrams' {
  export function Diagram(...children: any[]): any
  export function Sequence(...children: any[]): any
  export function Choice(defaultIndex: number, ...children: any[]): any
  export function Optional(child: any): any
  export function OneOrMore(child: any): any
  export function ZeroOrMore(child: any): any
  export function Terminal(text: string): any
  export function NonTerminal(text: string): any
}
