'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Heart, Menu, Search, ShoppingBag, Sparkles, X } from 'lucide-react'

const products = [
  { id: 1, name: 'Cloud Skin Tint', category: 'Base', price: 38, shade: '18 flexible shades', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85', tone: 'bg-[#e8cfc3]', tag: 'Bestseller' },
  { id: 2, name: 'Soft Focus Blush', category: 'Cheek', price: 26, shade: 'Rosewater', image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=900&q=85', tone: 'bg-[#dca49d]', tag: 'New' },
  { id: 3, name: 'Silk Slip Lip Oil', category: 'Lips', price: 24, shade: 'Fig gloss', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85', tone: 'bg-[#c98583]', tag: 'Best seller' },
  { id: 4, name: 'Night Bloom Palette', category: 'Eyes', price: 44, shade: '12 satin shades', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85', tone: 'bg-[#c9b9c0]', tag: 'Limited' },
  { id: 5, name: 'Dew Drop Highlighter', category: 'Cheek', price: 30, shade: 'Moonlit', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=85', tone: 'bg-[#ead8bf]', tag: 'Glow pick' },
  { id: 6, name: 'Define & Lift Mascara', category: 'Eyes', price: 22, shade: 'Ink black', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9f3723?auto=format&fit=crop&w=900&q=85', tone: 'bg-[#b9c0bc]', tag: 'Everyday' },
]

const categories = [
  { name: 'Complexion', detail: 'Your skin, refined', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&q=85' },
  { name: 'Cheek', detail: 'A little flush', image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=700&q=85' },
  { name: 'Lips', detail: 'Color that lingers', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=85' },
  { name: 'Eyes', detail: 'Look closer', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=85' },
]

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchOpen, setSearchOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])
  const [cart, setCart] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)

  const filteredProducts = useMemo(() => products.filter((product) => {
    const categoryMatch = activeCategory === 'All' || (activeCategory === 'Base' ? product.category === 'Base' : product.category === activeCategory)
    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase())
    return categoryMatch && searchMatch
  }), [activeCategory, search])

  const toggleFavorite = (id: number) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="bg-primary px-4 py-2 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-primary-foreground">Complimentary shipping on orders over $75</div>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
        <button className="lg:hidden" aria-label="Open menu"><Menu /></button>
        <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.2em] lg:flex"><a href="#shop">Shop</a><a href="#story">Our story</a><a href="#journal">Journal</a></nav>
        <a href="#top" className="absolute left-1/2 -translate-x-1/2 font-serif text-3xl italic tracking-tight">lune</a>
        <div className="flex items-center gap-4">
          <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search products"><Search size={19} strokeWidth={1.5} /></button>
          <button className="relative" onClick={() => setCartOpen(true)} aria-label="Open shopping bag"><ShoppingBag size={19} strokeWidth={1.5} />{cart > 0 && <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-accent font-mono text-[9px] text-accent-foreground">{cart}</span>}</button>
        </div>
      </header>
      {searchOpen && <div className="mx-auto flex max-w-7xl items-center gap-3 border-b border-border px-5 pb-5 lg:px-10"><Search size={16} className="text-muted-foreground" /><input autoFocus value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the collection" className="w-full bg-transparent font-serif text-xl outline-none placeholder:text-muted-foreground" /><button onClick={() => { setSearch(''); setSearchOpen(false) }} aria-label="Close search"><X size={18} /></button></div>}

      <section id="top" className="mx-5 grid min-h-[560px] max-w-7xl overflow-hidden bg-[#d8b6a9] lg:mx-auto lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-16 lg:px-20"><p className="mb-6 font-mono text-[10px] uppercase tracking-[0.28em]">The everyday edit / 01</p><h1 className="max-w-xl font-serif text-6xl leading-[0.93] tracking-tight md:text-8xl">Make room for your <em className="font-normal">face.</em></h1><p className="mt-8 max-w-sm text-sm leading-6 text-foreground/75">Thoughtful color, skin-loving formulas, and a softer approach to getting ready.</p><a href="#shop" className="mt-8 flex w-fit items-center gap-3 border-b border-foreground pb-2 font-mono text-[10px] uppercase tracking-[0.2em]">Shop the edit <ArrowRight size={15} /></a></div>
        <div className="relative min-h-[360px] bg-[#c59684]"><img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=90" alt="Model wearing soft natural makeup" className="absolute inset-0 size-full object-cover object-center mix-blend-multiply" /><div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">Lune, in her element</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><div className="mb-10 flex items-end justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Find your ritual</p><h2 className="mt-3 font-serif text-4xl">Shop by mood</h2></div><a href="#shop" className="hidden font-mono text-[10px] uppercase tracking-[0.2em] underline underline-offset-8 sm:block">View all</a></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{categories.map((category) => <a href="#shop" key={category.name} onClick={() => setActiveCategory(category.name === 'Complexion' ? 'Base' : category.name)} className="group relative aspect-[0.82] overflow-hidden bg-muted"><img src={category.image} alt={category.name} className="size-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-4 pb-4 pt-16 text-primary-foreground"><p className="font-serif text-2xl">{category.name}</p><p className="mt-1 text-xs text-primary-foreground/75">{category.detail}</p></div></a>)}</div></section>

      <section id="shop" className="bg-secondary/60 px-5 py-20 lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 border-b border-border pb-7 md:flex-row md:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">A considered collection</p><h2 className="mt-3 font-serif text-4xl">The edit</h2></div><div className="flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-[0.18em]"><button onClick={() => setActiveCategory('All')} className={activeCategory === 'All' ? 'border-b border-foreground pb-2' : 'text-muted-foreground'}>All</button>{['Base', 'Cheek', 'Lips', 'Eyes'].map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={activeCategory === category ? 'border-b border-foreground pb-2' : 'text-muted-foreground'}>{category}</button>)}</div></div><div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-12 md:grid-cols-3">{filteredProducts.map((product) => <article key={product.id} className="group"><div className={`relative aspect-[0.9] overflow-hidden ${product.tone}`}><img src={product.image} alt={product.name} className="size-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-background/85 px-2 py-1 font-mono text-[9px] uppercase tracking-wider">{product.tag}</span><button onClick={() => toggleFavorite(product.id)} aria-label={`Add ${product.name} to wishlist`} className="absolute right-3 top-3 rounded-full bg-background/85 p-2"><Heart size={16} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} className={favorites.includes(product.id) ? 'text-accent' : ''} /></button><button onClick={() => { setCart((count) => count + 1); setCartOpen(true) }} className="absolute inset-x-3 bottom-3 translate-y-2 bg-primary py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">Add to bag</button></div><div className="flex items-start justify-between gap-3 pt-4"><div><h3 className="font-serif text-xl">{product.name}</h3><p className="mt-1 text-xs text-muted-foreground">{product.shade}</p></div><p className="font-mono text-xs">${product.price}</p></div></article>)}</div>{filteredProducts.length === 0 && <p className="py-20 text-center font-serif text-2xl">Nothing found in this edit.</p>}</div></section>

      <section id="story" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-10"><div className="order-2 lg:order-1"><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">The lune philosophy</p><h2 className="mt-4 max-w-lg font-serif text-5xl leading-[0.98]">Beauty should feel like <em className="font-normal">you.</em></h2><p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">We make makeup for real mornings, late trains, first dates, and everything in between. Formulas that meet you where you are, never asking you to be anyone else.</p><a href="#journal" className="mt-8 inline-flex items-center gap-3 border-b border-foreground pb-2 font-mono text-[10px] uppercase tracking-[0.2em]">Read our story <ArrowRight size={15} /></a></div><div className="order-1 aspect-[1.15] overflow-hidden bg-[#e6d1c3] lg:order-2"><img src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=90" alt="Woman in warm natural light" className="size-full object-cover" /></div></section>

      <section id="journal" className="border-y border-border bg-[#eadcd3] px-5 py-16 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div className="flex items-center gap-4"><Sparkles size={20} strokeWidth={1.3} /><p className="font-serif text-3xl">A little glow, delivered.</p></div><div className="flex w-full max-w-md border-b border-foreground/40 pb-3"><input placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-foreground/55" /><button className="font-mono text-[10px] uppercase tracking-[0.18em]">Sign me up <ArrowRight className="ml-2 inline" size={14} /></button></div></div></section>
      <footer className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><a href="#top" className="font-serif text-3xl italic">lune</a><p className="mt-3 max-w-xs text-xs leading-5 text-muted-foreground">Makeup for the beautifully unfinished.</p></div><div className="grid grid-cols-2 gap-x-16 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"><a href="#shop">Shop all</a><a href="#story">About us</a><a href="#journal">Journal</a><a href="#top">Contact</a></div></div><div className="flex justify-between border-t border-border pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"><span>© 2026 lune beauty</span><span>Made with intention</span></div></footer>
      {cartOpen && <div className="fixed inset-0 z-50 bg-foreground/20" onClick={() => setCartOpen(false)}><aside onClick={(event) => event.stopPropagation()} className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-background p-6 shadow-xl"><div className="flex items-center justify-between border-b border-border pb-5"><h2 className="font-serif text-3xl">Your bag</h2><button onClick={() => setCartOpen(false)} aria-label="Close cart"><X /></button></div><div className="flex flex-1 items-center justify-center text-center"><div><ShoppingBag className="mx-auto mb-4 text-muted-foreground" strokeWidth={1} /><p className="font-serif text-xl">{cart ? `${cart} item${cart > 1 ? 's' : ''} ready to glow.` : 'Your bag is waiting.'}</p><p className="mt-2 text-xs text-muted-foreground">Frontend preview only — checkout is not connected.</p></div></div><button className="w-full bg-primary py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">Checkout preview</button></aside></div>}
    </main>
  )
}
