export interface PokemonItemProps {
  name: string;
  image: string;
  buttonSlot?: React.ReactNode;
  useLink?: boolean;
  colorClassName?: string;
  hoverColorClassName?: string;
}
