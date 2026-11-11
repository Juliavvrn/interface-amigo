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

- Fonts must support Cyrillic (site is Russian-only); display/body use one Cyrillic grotesk, mono uses a Cyrillic monospace — Syne/Space Grotesk lacked Cyrillic.
- Case page head (title/description/keywords/JSON-LD) is built from Russian fields in routes/works.$slug.tsx — every case gets its own metadata automatically.
