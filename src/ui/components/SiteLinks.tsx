/** Home and GitHub badges in the same shields.io flat-square style as wangzehan.com. */
export function SiteLinks() {
  return (
    <nav className="site-links" aria-label="Site links">
      <a href="https://wangzehan.com/">
        <img src="https://img.shields.io/badge/-Home-111111?style=flat-square&logo=safari&logoColor=white" alt="Home" />
      </a>
      <a href="https://github.com/WZehan/wangchunfeng-chimera" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
      </a>
    </nav>
  );
}
