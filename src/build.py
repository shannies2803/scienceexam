import re, os
s=open('app.html').read()
order=['living','plants','animals','fungi','materials','pcycles','acycles','magnets','skills','mixed']
parts=[open(f'bank/{o}.js').read() for o in order]
parts+=[open(f'bank/{o}_x.js').read() for o in order[:-1]]
parts+=[open(f'bank/{o}_y.js').read() for o in order]
parts+=[open(f'bank/{o}_z.js').read() for o in order]
parts+=[open(f'bank/{o}_v.js').read() for o in order]
parts+=[open(f'bank/{o}_u.js').read() for o in order]
lvf=sorted(f for f in os.listdir('lv') if f.endswith('.js'))
parts+=[open('lv/'+f).read() for f in lvf if not f.endswith(('_x.js','_y.js','_z.js','_u.js'))]
parts+=[open('lv/'+f).read() for f in lvf if f.endswith('_x.js')]
parts+=[open('lv/'+f).read() for f in lvf if f.endswith('_y.js')]
parts+=[open('lv/'+f).read() for f in lvf if f.endswith('_z.js')]
parts+=[open('lv/'+f).read() for f in lvf if f.endswith('_u.js')]
bank="\n".join(parts)
assert '</script' not in bank
figjs=(open('cards.js').read()+"\n"+open('fig.js').read()+"\n"+open('fig2.js').read()).replace('''style="max-width:' + (maxw || w) + 'px"''','''style="max-width:' + (maxw || w) + 'px; min-width:' + Math.min(w, 440) + 'px"''')
extra=open('extra.js').read(); extra2=open('extra2.js').read()
assert '</script' not in extra and '</script' not in extra2
out=s.replace('/*BANK*/',bank).replace('/*FIG*/',figjs).replace('/*EXTRA*/',extra).replace('/*EXTRA2*/',extra2)
open('science-quest-artifact.html','w').write(out)

print(len(out))

# standalone site for GitHub Pages / Netlify -> ../index.html (+ PWA files)
import hashlib, json
ver = hashlib.sha1(out.encode()).hexdigest()[:10]
head = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
  '<meta name="description" content="Gamified Singapore primary science revision from P1–2 discovery to PSLE.">\n'
  '<link rel="manifest" href="manifest.webmanifest">\n<meta name="theme-color" content="#E8256B">\n<link rel="icon" href="icon.svg" type="image/svg+xml">\n<link rel="apple-touch-icon" href="icon-192.png">\n'
  '<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-title" content="Science Quest">\n'
  '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n'
  "<script>if('serviceWorker' in navigator && location.protocol==='https:') addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));</script>\n")
i = out.index('</style>') + len('</style>')
open('../index.html', 'w').write(head + out[:i] + '\n</head>\n<body>\n' + out[i:] + '\n</body>\n</html>\n')
open('../manifest.webmanifest','w').write(json.dumps({"name":"Science Quest","short_name":"Science Quest","description":"Gamified Singapore primary science revision, P1 to PSLE.","start_url":"./","scope":"./","display":"standalone","background_color":"#EBEEEA","theme_color":"#E8256B",
  "icons":[{"src":"icon.svg","sizes":"any","type":"image/svg+xml"},{"src":"icon-192.png","sizes":"192x192","type":"image/png"},{"src":"icon-512.png","sizes":"512x512","type":"image/png"},{"src":"icon-512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}]}, indent=1))
open('../sw.js','w').write(open('sw.template.js').read().replace('__VER__', ver))
print('wrote ../index.html, manifest, sw.js', ver)
