<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
\n## Website architecture
- Keep the storefront as seven TanStack file routes with a shared header/footer; each section needs a direct, static-hostable URL.
- Keep product records and WhatsApp message construction centralized in the browser-safe catalog module so enquiries consistently reflect selected products.
- Prerender only the explicit public page list; the Hostinger deployment serves static HTML and requires no server or secrets.
