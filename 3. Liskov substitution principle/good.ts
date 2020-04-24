interface Figure {
  setWidth(width: number): void;
  setHeight(width: number): void;
  areaOf(): void;
}

class Rectangle implements Figure {
  setWidth(width: number) {}
  setHeight(height: number) {}
  areaOf() {}
}

class Square implements Figure {
  setWidth(width: number) {}
  setHeight(height: number) {}
  areaOf() {}
}
