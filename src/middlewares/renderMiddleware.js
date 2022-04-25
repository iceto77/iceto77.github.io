import { render, html } from '../lib/lit-html.js';
import { navigationTemplate } from '../views/navigationView.js';


const root = document.querySelector('#root');
const ctxRender = (ctx, templateResult) => {
    let layout = html`
        <nav>
            ${navigationTemplate(ctx)}
        </nav>
        <main>
            ${templateResult}
        </main>
        <footer class="footer">
            <p>All rights reserved &copy; Iceto77 - 2022 &copy; Powered by SoftUni - Ivo Papazov</p>
        </footer>
        
        `;

    render(layout, root)
};

export const renderMiddleware = (ctx, next) => {
    ctx.render = ctxRender.bind(null, ctx);
    next();
} 