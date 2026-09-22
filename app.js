const PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";
    const FEEDS = [
      { name: "ANSA Economia", url: "https://www.ansa.it/sito/notizie/economia/economia_rss.xml", cat: "italia", lang: "it" },
      { name: "ANSA Mondo", url: "https://www.ansa.it/sito/notizie/mondo/mondo_rss.xml", cat: "geo", lang: "it" },
      { name: "ANSA Ultim’ora", url: "https://www.ansa.it/sito/ansait_rss.xml", cat: "italia", lang: "it" },
      { name: "ANSA Europa", url: "https://www.ansa.it/europa/notizie/rss.xml", cat: "europa", lang: "it" },
      { name: "Sole 24 Ore · Italia", url: "https://www.ilsole24ore.com/rss/italia.xml", cat: "italia", lang: "it" },
      { name: "Sole 24 Ore · Mondo", url: "https://www.ilsole24ore.com/rss/mondo.xml", cat: "geo", lang: "it" },
      { name: "Repubblica Economia", url: "https://www.repubblica.it/rss/economia/rss2.0.xml", cat: "italia", lang: "it" },
      { name: "Repubblica Esteri", url: "https://www.repubblica.it/rss/esteri/rss2.0.xml", cat: "geo", lang: "it" },
      { name: "AGI Economia", url: "https://www.agi.it/economia/rss", cat: "italia", lang: "it" },
      { name: "BBC Business", url: "https://feeds.bbci.co.uk/news/business/rss.xml", cat: "finanza", lang: "en" },
      { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml", cat: "geo", lang: "en" },
      { name: "BBC Europa", url: "https://feeds.bbci.co.uk/news/world/europe/rss.xml", cat: "europa", lang: "en" },
      { name: "Reuters Business", url: "https://feeds.reuters.com/reuters/businessNews", cat: "finanza", lang: "en" },
      { name: "Reuters World", url: "https://feeds.reuters.com/Reuters/worldNews", cat: "geo", lang: "en" },
      { name: "Reuters Top News", url: "https://feeds.reuters.com/reuters/topNews", cat: "geo", lang: "en" },
      { name: "FT Markets", url: "https://www.ft.com/markets?format=rss", cat: "finanza", lang: "en" },
      { name: "The Economist", url: "https://www.economist.com/latest/rss.xml", cat: "finanza", lang: "en" },
      { name: "CNBC", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html", cat: "finanza", lang: "en" },
      { name: "MarketWatch", url: "https://feeds.content.dowjones.io/public/rss/mw_topstories", cat: "finanza", lang: "en" },
      { name: "NYT Business", url: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml", cat: "finanza", lang: "en" },
      { name: "Guardian Business", url: "https://www.theguardian.com/business/rss", cat: "finanza", lang: "en" },
      { name: "OilPrice", url: "https://oilprice.com/rss/main", cat: "finanza", lang: "en" },
      { name: "Foreign Affairs", url: "https://www.foreignaffairs.com/rss.xml", cat: "geo", lang: "en" },
      { name: "Foreign Policy", url: "https://www.foreignpolicy.com/feed/", cat: "geo", lang: "en" },
      { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml", cat: "geo", lang: "en" },
      { name: "NYT World", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", cat: "geo", lang: "en" },
      { name: "Guardian World", url: "https://www.theguardian.com/world/rss", cat: "geo", lang: "en" },
      { name: "Politico Europe", url: "https://www.politico.eu/feed/", cat: "europa", lang: "en" },
      { name: "Euronews", url: "https://www.euronews.com/rss", cat: "europa", lang: "en" },
      { name: "EUobserver", url: "https://euobserver.com/rss", cat: "europa", lang: "en" },
      { name: "Bruegel", url: "https://www.bruegel.org/rss.xml", cat: "europa", lang: "en" },
      { name: "Notes from Poland", url: "https://notesfrompoland.com/feed", cat: "polonia", lang: "en" },
      { name: "Onet Wiadomości", url: "https://wiadomosci.onet.pl/.feed", cat: "polonia", lang: "pl" },
      { name: "WP Wiadomości", url: "https://wiadomosci.wp.pl/rss.xml", cat: "polonia", lang: "pl" },
      { name: "Interia Wydarzenia", url: "https://wydarzenia.interia.pl/feed", cat: "polonia", lang: "pl" },
      { name: "Gazeta.pl", url: "https://wiadomosci.gazeta.pl/pub/rss/wiadomosci.xml", cat: "polonia", lang: "pl" },
      { name: "Rzeczpospolita", url: "https://www.rp.pl/rss_main", cat: "polonia", lang: "pl" },
      { name: "Polsat News", url: "https://www.polsatnews.pl/rss/wszystkie.xml", cat: "polonia", lang: "pl" },
      { name: "Money.pl", url: "https://www.money.pl/rss/", cat: "polonia", lang: "pl" },
      { name: "Google News · Polonia", url: "https://news.google.com/rss/search?q=Polonia+OR+Warszawa+OR+Tusk+OR+Poland&hl=it-IT&gl=IT&ceid=IT:it", cat: "polonia", lang: "it" },
      { name: "Google News · Europa", url: "https://news.google.com/rss/search?q=Unione+Europea+OR+von+der+Leyen+OR+BCE+OR+Bruxelles&hl=it-IT&gl=IT&ceid=IT:it", cat: "europa", lang: "it" },
      { name: "Google News · Mercati", url: "https://news.google.com/rss/search?q=mercati+OR+inflazione+OR+Borsa+OR+Fed+OR+BCE&hl=it-IT&gl=IT&ceid=IT:it", cat: "finanza", lang: "it" },
      { name: "Google News · Geopolitica", url: "https://news.google.com/rss/search?q=geopolitica+OR+NATO+OR+Ucraina+OR+Taiwan+OR+Medio+Oriente&hl=it-IT&gl=IT&ceid=IT:it", cat: "geo", lang: "it" },
    ];

    const MAX_PER_FEED = 4;
    const MAX_PER_COL = 18;
    const CACHE_KEY = "radar_tr_v1";
    let allItems = [];
    let currentFilter = "all";
    let translateOn = localStorage.getItem("radar_translate") !== "off";

    const $ = (id) => document.getElementById(id);

    function pickImage(it) {
      const cands = [];
      if (it.thumbnail) cands.push(it.thumbnail);
      if (it.enclosure && it.enclosure.link) cands.push(it.enclosure.link);
      const html = (it.content || "") + " " + (it.description || "");
      const re = /<img[^>]+src=["']([^"']+)["']/gi;
      let m;
      while ((m = re.exec(html))) cands.push(m[1]);
      const urlRe = /https?:\/\/[^"'<\s]+\.(?:jpg|jpeg|png|webp|gif)(?:\?[^"'<\s]*)?/gi;
      while ((m = urlRe.exec(html))) cands.push(m[0]);
      const bad = /pixel|spacer|1x1|logo|favicon|sprite|tracking|doubleclick|gravatar|placeholder|blank|icon/i;
      for (const raw of cands) {
        if (!raw) continue;
        let u = raw.replace(/&amp;/g, "&");
        if (u.startsWith("//")) u = "https:" + u;
        if (!/^https?:\/\//i.test(u)) continue;
        if (bad.test(u)) continue;
        if (/svg(\?|$)/i.test(u)) continue;
        return u;
      }
      return "";
    }

    function imgBlock(url, source, big) {
      if (url) {
        return `<img class="thumb" src="${escapeHtml(url)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'ph',textContent:'${escapeHtml((source||'?').slice(0,3).toUpperCase())}'}))">`;
      }
      const label = escapeHtml((source || "?").slice(0, 3).toUpperCase());
      return `<div class="ph">${label}</div>`;
    }

    function strip(html) {
      const d = document.createElement("div");
      d.innerHTML = html || "";
      return (d.textContent || "").replace(/\s+/g, " ").trim();
    }

    function stripSourceSuffix(s) {
      return String(s || "")
        .replace(/\s+[-–—|]\s+[^-–—|]{2,50}$/g, "")
        .replace(/\s+\([^)]{2,40}\)$/g, "")
        .trim();
    }

    function normTitle(s) {
      let t = stripSourceSuffix(s).toLowerCase();
      t = t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      t = t.replace(/https?:\/\/\S+/g, " ");
      t = t.replace(/[^a-z0-9\s]/g, " ");
      t = t.replace(/\b(the|and|for|with|from|that|this|are|was|were|has|have|had|will|its|his|her|their|after|before|over|into|onto|about|il|lo|la|i|gli|le|un|una|uno|di|da|in|su|per|con|del|della|dello|dei|delle|degli|che|non|come|piu|più|tra|fra|nel|nella|sul|sulla)\b/g, " ");
      return t.replace(/\s+/g, " ").trim();
    }

    function titleTokens(s) {
      return normTitle(s).split(" ").filter((w) => w.length > 3);
    }

    function jaccard(a, b) {
      const A = new Set(a), B = new Set(b);
      if (!A.size || !B.size) return 0;
      let inter = 0;
      A.forEach((x) => { if (B.has(x)) inter++; });
      return inter / (A.size + B.size - inter);
    }

    function linkKey(url) {
      try {
        const u = new URL(url);
        let path = (u.pathname || "").replace(/\/+$/, "");
        const last = path.split("/").filter(Boolean).pop() || "";
        return last.replace(/[^a-z0-9]/gi, "").slice(0, 48).toLowerCase();
      } catch { return ""; }
    }

    function isDuplicate(item, accepted) {
      const n = normTitle(item.title);
      const toks = titleTokens(item.title);
      const lk = linkKey(item.link);
      for (const other of accepted) {
        const on = normTitle(other.title);
        if (n && on && n === on) return true;
        if (n && on && n.length > 24 && on.length > 24 && (n.includes(on) || on.includes(n))) return true;
        if (lk && lk.length > 12 && lk === linkKey(other.link)) return true;
        const score = jaccard(toks, titleTokens(other.title));
        if (score >= 0.68) return true;
      }
      return false;
    }

    function escapeHtml(s) {
      return String(s || "")
        .replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    function hash(s) {
      let h = 0;
      for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
      return "t" + h;
    }

    function loadCache() {
      try { return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); }
      catch { return {}; }
    }
    function saveCache(c) {
      try { localStorage.setItem(CACHE_KEY, JSON.stringify(c)); } catch {}
    }

    async function translateText(text, from) {
      const t = (text || "").trim();
      if (!t) return t;
      const sl = from === "pl" ? "pl" : "en";
      const cache = loadCache();
      const k = sl + ":" + hash(t);
      if (cache[k]) return cache[k];
      const url = "https://api.mymemory.translated.net/get?langpair=" + sl + "|it&q=" + encodeURIComponent(t.slice(0, 450));
      const res = await fetch(url);
      if (!res.ok) return t;
      const data = await res.json();
      const out = (data && data.responseData && data.responseData.translatedText) || t;
      if (out && !/MYMEMORY WARNING/i.test(out) && data.responseStatus === 200) {
        cache[k] = out;
        saveCache(cache);
        return out;
      }
      return t;
    }

    function looksItalian(text) {
      const t = (text || "").toLowerCase();
      return /( il | la | gli | dello | della | per | con | una | sono | anche | dopo | prima | italia | mercati | borsa | governo )/.test(" " + t + " ");
    }

    async function translateItems(items) {
      const queue = items.filter((it) => it.lang !== "it" && !looksItalian(it.title));
      let done = 0;
      for (const it of queue) {
        try {
          it.titleIt = await translateText(it.title, it.lang);
          if (it.desc) it.descIt = await translateText(it.desc.slice(0, 220), it.lang);
          it.translated = !!(it.titleIt && it.titleIt !== it.title);
        } catch {
          it.titleIt = it.title;
          it.descIt = it.desc;
        }
        done++;
        if (done % 4 === 0) render();
      }
    }

    function timeAgo(dateStr) {
      const t = new Date(dateStr).getTime();
      if (!t) return "";
      const m = Math.max(0, Math.round((Date.now() - t) / 60000));
      if (m < 1) return "adesso";
      if (m < 60) return m + " min fa";
      const h = Math.round(m / 60);
      if (h < 24) return h + " h fa";
      const d = Math.round(h / 24);
      return d + " g fa";
    }

    async function loadFeed(feed) {
      const res = await fetch(PROXY + encodeURIComponent(feed.url));
      if (!res.ok) throw new Error(feed.name);
      const data = await res.json();
      if (data.status !== "ok" || !Array.isArray(data.items)) throw new Error(feed.name);
      return data.items.slice(0, MAX_PER_FEED).map((it) => ({
        title: it.title || "(senza titolo)",
        titleIt: "",
        link: it.link || it.guid || "#",
        desc: strip(it.description || it.content || ""),
        descIt: "",
        date: it.pubDate,
        source: feed.name,
        cat: feed.cat,
        lang: feed.lang,
        translated: false,
        image: pickImage(it)
      }));
    }

    const SOURCE_W = {
      "Reuters Business": 8, "Reuters World": 8, "Reuters Top News": 9,
      "FT Markets": 9, "The Economist": 8, "ANSA Ultim’ora": 8,
      "ANSA Economia": 7, "ANSA Mondo": 7, "ANSA Europa": 7,
      "Sole 24 Ore · Italia": 8, "Sole 24 Ore · Mondo": 8,
      "Repubblica Economia": 6, "Repubblica Esteri": 6, "AGI Economia": 6,
      "BBC Business": 7, "BBC World": 7, "BBC Europa": 7,
      "Foreign Affairs": 7, "Foreign Policy": 7, "NYT World": 7, "NYT Business": 7,
      "Politico Europe": 7, "Al Jazeera": 6, "CNBC": 6, "MarketWatch": 6,
      "Guardian World": 6, "Guardian Business": 6, "Euronews": 6,
      "OilPrice": 6, "Notes from Poland": 6, "Onet Wiadomości": 6, "WP Wiadomości": 6, "Interia Wydarzenia": 6, "Gazeta.pl": 6, "Rzeczpospolita": 7, "Polsat News": 6, "Money.pl": 6,
    };
    const TOP_WORDS = [
      "fed","bce","fomc","inflazione","inflation","tassi","rates","spread","btp",
      "petrolio","oil","brent","gas","guerra","war","nato","ucraina","ukraine",
      "russia","cina","china","taiwan","iran","israele","israel","trump","xi",
      "dazi","tariff","sanzioni","sanctions","default","recessione","recession",
      "vertice","summit","attacco","strike","missile","ceasefire",
      "tregua","bank","banca","crisi","crisis","blackout","hormuz"
    ];

    function hoursAgo(dateStr) {
      const t = new Date(dateStr).getTime();
      if (!t) return 48;
      return Math.max(0, (Date.now() - t) / 36e5);
    }

    function newsScore(item, echoes) {
      let s = SOURCE_W[item.source] || 4;
      const blob = ((item.title || "") + " " + (item.desc || "")).toLowerCase();
      TOP_WORDS.forEach((w) => { if (blob.includes(w)) s += 3; });
      const h = hoursAgo(item.date);
      if (h < 2) s += 8;
      else if (h < 6) s += 5;
      else if (h < 12) s += 3;
      else if (h < 24) s += 1;
      else s -= 2;
      s += Math.min(9, (echoes || 0) * 4);
      return s;
    }

    function countEchoes(pool) {
      pool.forEach((it) => { it.echoes = 0; it.score = 0; });
      for (let i = 0; i < pool.length; i++) {
        for (let j = i + 1; j < pool.length; j++) {
          const a = titleTokens(pool[i].title), b = titleTokens(pool[j].title);
          if (jaccard(a, b) >= 0.45) {
            pool[i].echoes++; pool[j].echoes++;
          }
        }
      }
      pool.forEach((it) => { it.score = newsScore(it, it.echoes); });
    }

    function render() {
      countEchoes(allItems);
      const groups = { finanza: [], geo: [], italia: [], polonia: [], europa: [] };
      const accepted = [];
      let dups = 0;
      const sorted = [...allItems].sort((a, b) => (b.score || 0) - (a.score || 0) || (new Date(b.date) - new Date(a.date)));
      for (const item of sorted) {
        if (isDuplicate(item, accepted)) { dups++; continue; }
        accepted.push(item);
        if (groups[item.cat] && groups[item.cat].length < MAX_PER_COL) {
          groups[item.cat].push(item);
        }
      }
      const topCut = accepted.slice().sort((a, b) => (b.score || 0) - (a.score || 0))[3];
      const topMin = topCut ? (topCut.score || 0) : 99;
      accepted.forEach((it) => { it.isTop = (it.score || 0) >= Math.max(14, topMin); });
      Object.values(groups).forEach((arr) => {
        arr.sort((a, b) => (b.isTop - a.isTop) || (b.score || 0) - (a.score || 0));
        arr.slice(0, 2).forEach((it) => { it.isTop = true; });
      });
      if ($("dups")) $("dups").textContent = dups + " doppioni filtrati";
      renderTop(accepted);
      for (const cat of ["finanza", "geo", "italia", "polonia", "europa"]) {
        $("c-" + cat).textContent = groups[cat].length;
        const box = $(cat);
        if (!groups[cat].length) {
          box.innerHTML = '<div class="empty">Nessuna notizia al momento.</div>';
          continue;
        }
        box.innerHTML = groups[cat].map((it) => {
          const useIt = translateOn && (it.titleIt || it.lang === "it");
          const title = useIt && it.titleIt ? it.titleIt : it.title;
          const desc = useIt && it.descIt ? it.descIt : it.desc;
          const badgeClass = it.translated && translateOn ? "badge tr" : "badge";
          const badgeText = it.translated && translateOn ? it.source + " · tradotto" : it.source;
          const orig = (it.translated && translateOn) ? `<div class="orig">${escapeHtml(it.title)}</div>` : "";
          const star = it.isTop ? '<span class="star">TOP</span>' : "";
          return `
          <article class="${it.isTop ? "top" : ""}">
            <a href="${escapeHtml(it.link)}" target="_blank" rel="noopener noreferrer">
              <div class="src"><span class="${badgeClass}">${star}${escapeHtml(badgeText)}</span><span>${timeAgo(it.date)}</span></div>
              <div class="row">
                ${imgBlock(it.image, it.source)}
                <div>
                  <h3>${escapeHtml(title)}</h3>
                  ${desc ? `<p>${escapeHtml(desc)}</p>` : ""}
                  ${orig}
                </div>
              </div>
            </a>
          </article>`;
        }).join("");
      }
      applyFilter(currentFilter);
      renderBreaking();
    }

    function renderTop(accepted) {
      const box = $("topNews");
      if (!box) return;
      const top = accepted.slice().sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 4);
      if (!top.length) {
        box.innerHTML = '<div class="empty">Nessuna notizia top al momento.</div>';
        return;
      }
      const cats = { finanza: "Finanza", geo: "Geopolitica", italia: "Italia", polonia: "Polonia", europa: "Europa" };
      box.innerHTML = top.map((it, i) => {
        const title = (translateOn && it.titleIt) ? it.titleIt : it.title;
        return `<div class="top-card">
          <a href="${escapeHtml(it.link)}" target="_blank" rel="noopener noreferrer">
            ${imgBlock(it.image, it.source)}
            <div class="meta">
              <div class="kicker"><span>Top ${i + 1} · ${cats[it.cat] || ""}</span><span>${timeAgo(it.date)}</span></div>
              <h3>${escapeHtml(title)}</h3>
            </div>
          </a>
        </div>`;
      }).join("");
    }

    function renderBreaking() {
      const track = $("breakingTrack");
      if (!track) return;
      const picked = [];
      const latest = [...allItems]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter((it) => {
          if (isDuplicate(it, picked)) return false;
          picked.push(it);
          return true;
        })
        .slice(0, 12);
      if (!latest.length) {
        track.innerHTML = "<a>In attesa delle ultim’ora…</a>";
        return;
      }
      const html = latest.map((it) => {
        const title = (translateOn && it.titleIt) ? it.titleIt : it.title;
        return `<a href="${escapeHtml(it.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}<em>${escapeHtml(it.source)}</em></a>`;
      }).join("");
      track.innerHTML = html + html;
    }

    function applyFilter(filter) {
      currentFilter = filter;
      document.querySelectorAll(".filters button").forEach((b) => {
        b.classList.toggle("active", b.dataset.filter === filter);
      });
      document.querySelectorAll(".col").forEach((col) => {
        const show = filter === "all" || col.dataset.col === filter;
        col.style.display = show ? "" : "none";
      });
      const grid = document.querySelector(".grid");
      grid.style.gridTemplateColumns = filter === "all" ? "" : "1fr";
    }

    async function refresh() {
      $("status").textContent = "Aggiornamento in corso…";
      const results = await Promise.allSettled(FEEDS.map(loadFeed));
      const items = [];
      let ok = 0;
      results.forEach((r) => {
        if (r.status === "fulfilled") { items.push(...r.value); ok++; }
      });
      allItems = items;
      render();
      if (translateOn) {
        $("status").textContent = "Traduzione in italiano…";
        await translateItems(allItems);
        render();
      }
      const now = new Date();
      $("clock").textContent = "Aggiornato alle " + now.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
      $("status").textContent = ok + "/" + FEEDS.length + " fonti attive";
    }

    function syncTranslateBtn() {
      $("translateBtn").classList.toggle("active-toggle", translateOn);
      $("translateBtn").textContent = translateOn ? "Italiano ON" : "Traduci in italiano";
    }

    $("refresh").addEventListener("click", refresh);
    $("translateBtn").addEventListener("click", async () => {
      translateOn = !translateOn;
      localStorage.setItem("radar_translate", translateOn ? "on" : "off");
      syncTranslateBtn();
      render();
      if (translateOn) {
        $("status").textContent = "Traduzione in italiano…";
        await translateItems(allItems);
        render();
        $("status").textContent = "Traduzione aggiornata";
      }
    });
    document.querySelectorAll(".filters button").forEach((b) => {
      b.addEventListener("click", () => applyFilter(b.dataset.filter));
    });
    syncTranslateBtn();

    refresh();
    setInterval(refresh, 10 * 60 * 1000);
