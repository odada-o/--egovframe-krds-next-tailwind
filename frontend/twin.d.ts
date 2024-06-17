import 'twin.macro';
import styledImport from 'styled-components';
import { css as cssImport } from 'styled-components';

declare module 'twin.macro' {
    const styled: typeof styledImport;
    const css: typeof cssImport;
}

declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        tw?: string;
        css?: any;
    }
}
