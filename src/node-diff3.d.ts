declare module "node-diff3" {
  export interface LCSResult {
    buffer1index: number;
    buffer2index: number;
    chain?: LCSResult | null;
  }

  export interface MergeDigInOptions {
    stringSeparator?: string | RegExp;
  }

  export interface MergeResult {
    conflict: boolean;
    result: string[];
  }

  export function LCS<T>(buffer1: T[], buffer2: T[]): LCSResult;
  export function mergeDigIn(
    a: string,
    o: string,
    b: string,
    options?: MergeDigInOptions
  ): MergeResult;

  export const diff3Merge: (...args: any[]) => any;
  export const diffComm: (...args: any[]) => any;
  export const diffPatch: (...args: any[]) => any;
  export const mergeDiff3: (...args: any[]) => any;
  export const patch: (...args: any[]) => any;
}
