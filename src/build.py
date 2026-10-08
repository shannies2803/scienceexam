import re, os
s=open('app.html').read()
order=['living','plants','animals','fungi','materials','pcycles','acycles','magnets','skills','mixed']
parts=[open(f'bank/{o}.js').read() for o in order]
parts+=[open(f'bank/{o}_x.js').read() for o in order[:-1]]
parts+=[open(f'bank/{o}_y.js').read() for o in order]
parts+=[open(f'bank/{o}_z.js').read() for o in order]
lvf=sorted(f for f in os.listdir('lv') if f.endswith('.js'))
parts+=[open('lv/'+f).read() for f in lvf if not f.endswith(('_x.js','_y.js'))]
parts+=[open('lv/'+f).read() for f in lvf if f.endswith('_x.js')]
parts+=[open('lv/'+f).read() for f in lvf if f.endswith('_y.js')]
bank="\n".join(parts)
assert '</script' not in bank
figjs=(open('cards.js').read()+"\n"+open('fig.js').read()+"\n"+open('fig2.js').read()).replace('''style="max-width:' + (maxw || w) + 'px"''','''style="max-width:' + (maxw || w) + 'px; min-width:' + Math.min(w, 440) + 'px"''')
out=s.replace('/*BANK*/',bank).replace('/*FIG*/',figjs)
open('science-quest-artifact.html','w').write(out)

print(len(out))

# standalone site for GitHub Pages / Netlify -> ../index.html
head = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="description" content="Gamified Singapore primary science revision from P1–2 discovery to PSLE.">\n<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n'
i = out.index('</style>') + len('</style>')
open('../index.html', 'w').write(head + out[:i] + '\n</head>\n<body>\n' + out[i:] + '\n</body>\n</html>\n')
print('wrote ../index.html')
