export const required: (val: string) => boolean = (val) => {
    const valid = !!val;

    if (valid) {
      return true;
    } else {
      throw new Error('is not Required');
    }
  }

export const minLength: (min: number) => (val: string) => boolean = min => (val) => {
    const valid = val.length > min;

    if (valid) {
        return true;
    } else {
        throw new Error(`length is less than ${min}`);
    }
}