export interface SplitScreenProps {
  children: [React.ReactNode, React.ReactNode]; // Assuming left and right children
  leftWeight: number;
  rightWeight: number;
}
