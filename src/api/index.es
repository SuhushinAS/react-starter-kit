import Example from './Example';

export default class Api {
    constructor(base = '') {
        this.Example = new Example(base);
    }
}
