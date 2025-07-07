export interface ITheme {
  id: number;
  name: string;
  displayName: string;
}

export const themeInfo: ITheme[] = [
  { id: 1, name: "p-green", displayName: "Phosphor Green" },
  { id: 2, name: "p-amber", displayName: "Phosphor Amber" },
  { id: 3, name: "p-white", displayName: "Phosphor White" },
] as const;

export type ThemeInfo = (typeof themeInfo)[number];

export type ViewportPosition = {
  x: number;
  y: number;
};
