// Put all type declarations/extensions here

type Options = {
    branch?: string,
    email?: string,
    password?: string,
    token?: string,
    serverUrl?: string,
    serverPassword?: string,
    gzip?: boolean
}

interface ScreepsModules {
  constructor(options: Options): void;
}

declare module 'screeps-modules' {
  export default ScreepsModules;
}
