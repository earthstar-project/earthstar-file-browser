import {
    File,
    Folder,
    pathsToTree,
} from './util';

export interface DocTreeViewProps {
    paths: string[],
    className?: string,
}
export let DocTreeView = (props: DocTreeViewProps) => {
    let { paths, className } = props;
    let root: Folder = pathsToTree(paths);
    return (
        <div className={`${className??''} bg-white p-2 rounded-xl overflow-y-auto`}>
            <div>/poems</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;160384.txt</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;160395.txt</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;160396.txt</div>
            <div className='bg-green-200 -mx-2 px-2'>&nbsp;&nbsp;&nbsp;&nbsp;160398.txt</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;160399.txt</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;160403.txt</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;160409.txt</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;160412.txt</div>
            <details className='px-3' open>
                <summary className='-mx-3'>/foo/</summary>
                <details className='px-3' open>
                    <summary className='-mx-3'>bar/</summary>
                    <details className='px-3' open>
                        <summary className='-mx-3'>baz/</summary>
                        <div>a.txt</div>
                        <div>b.txt</div>
                        <div>c.txt</div>
                    </details>
                    <div>x.jpg</div>
                    <div>y.jpg</div>
                </details>
            </details>
        </div>
    );
}
