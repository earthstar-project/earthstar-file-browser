import React from 'react';
import { DocTreeView } from './doc-tree';

let makeTempBorder = (enabled: boolean | undefined): string => {
    return enabled
        ? ` `//border-yellow-500 border-2 border-dashed `
        : ' ';
}

// from https://mcdlr.com/8/
//let triangleRightSm = '▸';
//let triangleDownSm = '▾';
//let triangleRightLg = '▶';
let triangleDownLg = '▼';

//================================================================================
// FAKE DATA

let paths = [
    '/about/~@cinn.xxx/displayName.txt',
    '/foo/bar/baz/111.txt',  // change many things at once
    '/foo/bar/baz/222.txt',  // only change last seg
    '/foo/bar/baz/333.txt',
    '/foo/quux/baz/444.txt',  // change middle seg, same overall length
    '/foo/quux/555.txt',  // shorten
    '/foo/quux/zip/666.txt', // lengthen
];

let content = `
I have eaten
the plums
that were in
the icebox

and which
you were probably
saving
for breakfast

Forgive me
they were delicious
so sweet
and so cold

  - William Carlos Williams`.trim();

//================================================================================

interface BasicProps {
    className?: string;
    tempBorder?: boolean;
}

export let BrowseScreen = () => {
    return (
        <div className='flex gap-8 flex-col bg-purple-400 fixed inset-0 p-3 overflow-y-hidden'>
            <Earthbar className='flex-none' tempBorder={true}/>
            <TreeAndDetail className='flex-auto' tempBorder={true}/>
        </div>
    );
}

export let Earthbar = (props: BasicProps) => {
    let { className, tempBorder } = props;
    return (
        <div className={`${className ?? ''} ${makeTempBorder(tempBorder)} flex flex-wrap gap-1`}>
            <button type="button" className='opacity-60 flex-none text-black px-2 py-1.5 rounded-xl font-bold border-none bg-white shadow-flat'>+workspace.2oifjqoj {triangleDownLg}</button>
            <button type="button" className='opacity-60 flex-none text-black px-2 py-1.5 rounded-xl font-bold border-none bg-none'>Create...</button>
            <button type="button" className='opacity-60 flex-none text-black px-2 py-1.5 rounded-xl font-bold border-none bg-none'>Join...</button>
            <div className='flex-auto'/>
            <button type="button" className='opacity-60 flex-none text-black px-2 py-1.5 rounded-xl font-bold border-none bg-none'>@cinn</button>
        </div>
    );
}

export let TreeAndDetail = (props: BasicProps) => {
    let { className, tempBorder } = props;
    return (
        <div className={`${className ?? ''} ${makeTempBorder(tempBorder)} flex items-start gap-2`}>
            <DocTreeView paths={paths} className='flex-none w-40 max-h-screen'/>
            <div className='flex-auto bg-white max-h-screen rounded-xl overflow-y-auto'>
                <div className='p-2 bg-green-200'>
                    <h3>/poems/160398.txt</h3>
                </div>
                <div className='p-2'>
                    <div className='h-3'/>
                    <form className='flex flex-wrap gap-1'>
                        <button type="button" className='shadow-flat flex-none text-purple-100 bg-purple-500 px-2 py-1.5 rounded-xl font-bold'> Delete </button>
                        <button type="button" className='shadow-flat flex-none text-purple-100 bg-purple-500 px-2 py-1.5 rounded-xl font-bold'> Move </button>
                        <button type="button" className='shadow-flat flex-none text-purple-100 bg-purple-500 px-2 py-1.5 rounded-xl font-bold'> Copy </button>
                        <button type="button" className='shadow-flat flex-none text-purple-100 bg-purple-500 px-2 py-1.5 rounded-xl font-bold'> Download </button>
                        <button type="button" className='shadow-flat flex-none text-purple-100 bg-purple-500 px-2 py-1.5 rounded-xl font-bold'> Blah </button>
                        <button type="button" className='shadow-flat flex-none text-purple-100 bg-purple-500 px-2 py-1.5 rounded-xl font-bold'> Blah blah </button>
                        <button type="button" className='shadow-flat flex-none text-purple-100 bg-purple-500 px-2 py-1.5 rounded-xl font-bold'> Blah blah </button>
                        <button type="button" className='shadow-flat flex-none text-purple-100 bg-purple-500 px-2 py-1.5 rounded-xl font-bold'> Blah blah </button>
                    </form>
                    <div className='h-4'/>
                    <div><span className='opacity-50'>Created by:</span> <span>@cinn</span></div>
                    <div><span className='opacity-50'>Last modified</span> <span>Tuesday Oct 3, 9:31am</span></div>
                    <div><span className='opacity-50'>Content:</span></div>
                    <div className='h-3'/>
                    <pre className='shadow-inner bg-green-200 p-4 -mx-2 whitespace-pre-wrap'>{content}</pre>
                </div>
            </div>
        </div>
    );
}
