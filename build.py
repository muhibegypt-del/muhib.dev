s = open('src.html', encoding='utf-8').read()
js = open('projects.js', encoding='utf-8').read()
open('index.html', 'w', encoding='utf-8').write(s.replace('<script src="projects.js"></script>', '<script>\n' + js + '\n</script>'))
