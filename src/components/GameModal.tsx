import { useEffect, useState } from 'react';
import type { Game } from '../types';

interface Props {
  game: Game;
  onClose: () => void;
}

// Lightweight markdown renderer (no remote deps).
// Supports: headings (### h3), bold (**), italic (*), code (`),
// blockquote (>), unordered (- ) and ordered (1. ) lists, paragraphs.
function renderMarkdown(md: string): React.ReactNode {
  const lines = md.split('\n');
  const out: React.ReactNode[] = [];
  let para: string[] = [];
  let list: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let quote: string[] = [];

  const flushPara = () => {
    if (para.length) {
      out.push(
        <p key={`p-${out.length}`} dangerouslySetInnerHTML={{ __html: inline(para.join(' ')) }} />,
      );
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      const Tag = list.type;
      out.push(
        <Tag key={`l-${out.length}`}>
          {list.items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inline(it) }} />
          ))}
        </Tag>,
      );
      list = null;
    }
  };
  const flushQuote = () => {
    if (quote.length) {
      out.push(
        <blockquote
          key={`q-${out.length}`}
          className="border-l-2 border-amber-500/70 pl-4 italic my-3 text-stone-600 dark:text-stone-400"
          dangerouslySetInnerHTML={{ __html: inline(quote.join(' ')) }}
        />,
      );
      quote = [];
    }
  };
  const flushAll = () => {
    flushPara();
    flushList();
    flushQuote();
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith('### ')) {
      flushAll();
      out.push(<h3 key={`h-${out.length}`}>{line.slice(4)}</h3>);
      continue;
    }
    if (line.startsWith('> ')) {
      flushPara();
      flushList();
      quote.push(line.slice(2));
      continue;
    }
    const ulMatch = line.match(/^- (.+)/);
    if (ulMatch) {
      flushPara();
      flushQuote();
      if (!list || list.type !== 'ul') {
        flushList();
        list = { type: 'ul', items: [] };
      }
      list.items.push(ulMatch[1]);
      continue;
    }
    const olMatch = line.match(/^\d+\.\s+(.+)/);
    if (olMatch) {
      flushPara();
      flushQuote();
      if (!list || list.type !== 'ol') {
        flushList();
        list = { type: 'ol', items: [] };
      }
      list.items.push(olMatch[1]);
      continue;
    }
    if (line.trim() === '') {
      flushAll();
      continue;
    }
    flushList();
    flushQuote();
    para.push(line);
  }
  flushAll();
  return out;
}

function inline(s: string): string {
  // Escape HTML first
  const esc = s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return esc
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>');
}

export default function GameModal({ game, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const share = async () => {
    const url = new URL(window.location.href);
    url.search = `?g=${game.id}`;
    const link = url.toString();
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback: prompt
      window.prompt('Copy this link:', link);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-950/60 backdrop-blur-sm p-0 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={game.name}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white dark:bg-stone-900 shadow-2xl border border-stone-200 dark:border-stone-800"
      >
        <div className="sticky top-0 flex items-center justify-between gap-3 px-6 py-4 bg-white/95 dark:bg-stone-900/95 backdrop-blur border-b border-stone-200 dark:border-stone-800">
          <div className="min-w-0">
            <h2 className="font-display text-2xl text-stone-900 dark:text-stone-50 truncate">
              {game.name}
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 truncate">
              {game.short_description}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={share}
              className="text-xs px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500"
              aria-label="Copy share link"
            >
              {copied ? 'Copied!' : 'Share'}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 grid place-items-center rounded-full text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        <div className="px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
            <Meta label="Players" value={game.players_max >= 99 ? `${game.players_min}+` : `${game.players_min}–${game.players_max}`} />
            <Meta label="Age" value={`${game.age_min}+`} />
            <Meta label="Time" value={`${game.duration_minutes[0]}–${game.duration_minutes[1]} min`} />
            <Meta label="Gear" value={game.equipment === 'none' ? 'Nothing' : game.equipment} />
            <Meta label="Energy" value={game.energy} />
            <Meta label="Settings" value={game.setting.join(', ')} />
            <Meta label="Skills" value={game.skills.join(', ')} />
            <Meta label="Tags" value={game.tags.join(', ')} />
          </div>

          <div className="prose-rules">{renderMarkdown(game.rules)}</div>

          {game.aliases?.length ? (
            <p className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400">
              Also known as: {game.aliases.join(' · ')}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500">
        {label}
      </div>
      <div className="text-stone-800 dark:text-stone-200 capitalize">{value}</div>
    </div>
  );
}
