export default interface Clip {
  id: string;
  height: number;
  width: number;
  assets: {
    image: string;
  };
  displayName: string;
}