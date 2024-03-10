import { MoviesBase } from "./base";
import { Movies } from "./movies";
import { applyMixins } from "./util";


class Typicode extends MoviesBase {}
interface Typicode extends Movies {}

applyMixins(Typicode, [Movies]);

export default Typicode;
