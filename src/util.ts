
export let commonStringPrefix = (s1: string, s2: string): string => {
    let minLen = Math.min(s1.length, s2.length);
    let ii = 0;
    while (ii < minLen) {
        if (s1[ii] !== s2[ii]) { break; }
        ii += 1;
    }
    return s1.slice(0, ii);
}

export let arrayIsPrefixOf = (a: any[], b: any[]): boolean => {
    if (a.length > b.length) { return false; }
    for (let ii = 0; ii < a.length; ii++) {
        if (a[ii] !== b[ii]) { return false; }
    }
    return true;
}

export interface Folder {
    kind: 'FOLDER' | 'FILE',  // not normally FILE, but it's temporarily FILE during tree construction
    path: string, // complete path to this folder, does not end in '/'.
    name: string, // just the last path segment.  no '/'
    subfolders: Folder[],
    files: File[],

    parent?: Folder,  // temporarily used during tree construction
}
export interface File {
    kind: 'FILE',
    path: string, // full path
    name: string, // just the last path segment
}

export let pathsToTree = (paths: string[]) => {
    // NOTE: this assumes that paths is already sorted.

    let segs: string[] = [];
    let root: Folder = {
        // parent: undefined,
        kind: 'FOLDER',
        path: '',
        name: '',
        subfolders: [],
        files: [],
    }
    let treePointer: Folder = root;
    for (let path of paths) {
        let newSegs = path.split('/');
        // trim down segs until it's a prefix of newSegs
        while (segs.length > 0 && !arrayIsPrefixOf(segs, newSegs)) {
            segs.pop();
            treePointer = treePointer.parent as Folder;
            if (treePointer === null) { console.error('oops'); }
        }
        // build up segs to match newSegs
        let ii = segs.length;
        while (segs.length !== newSegs.length) {
            let thisSeg = newSegs[ii];
            let isFile = segs.length === newSegs.length - 1;

            let thisFolder: Folder = {
                parent: treePointer,
                kind: isFile ? 'FILE' : 'FOLDER',
                path: segs.join('/') + '/' + thisSeg,
                name: thisSeg,
                subfolders: [],
                files: [],
            }
            treePointer.subfolders.push(thisFolder);
            treePointer = thisFolder;

            segs.push(thisSeg);
            ii++;
        }
    }
    // get rid of extra top-level root folder
    root = root.subfolders[0];
    // clean up
    cleanTree(root);
    return root;
}

let cleanTree = (folder: Folder): void => {
    delete folder.parent;

    // convert leaf nodes from folders to files
    folder.files = folder.subfolders
        .filter((f: Folder) => f.kind === 'FILE')
        .map((f: Folder) => {
            let file: File = {
                kind: 'FILE',
                path: f.path,
                name: f.name,
            };
            return file;
        });
    folder.subfolders = folder.subfolders.filter(f => f.kind === 'FOLDER');

    for (let subfolder of folder.subfolders) {
        cleanTree(subfolder);
    }
}