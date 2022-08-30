class Storage<T extends { id: number | string }> {
  data: Record<string, T> = {};

  constructor(data: T[]) {
    this.data = data.reduce<Record<string, T>>((indexedItems, item) => {
      return { ...indexedItems, [String(item.id)]: item };
    }, {});
  }

  all() {
    return Object.values(this.data);
  }

  get(id: string) {
    return this.data[id];
  }

  set(id: string, data: T) {
    this.data[id] = data;
  }
}

const createStorage = <T extends { id: number | string }>(data: T[]) => new Storage(data);

export default createStorage;
