# Vértice Digital – Site institucional (projeto acadêmico)

**Objetivo**: Apresentar a agência fictícia Vértice Digital, seus serviços, portfólio e informações de contato, seguindo o *Design System* fornecido (Darkroom Editorial).

---  

## 📂  Estrutura do projeto

```
/
├─ public/                # ← pasta que será publicada
│   ├─ index.html
│   ├─ sobre.html
│   ├─ servicos.html
│   ├─ portfolio.html
│   ├─ contato.html
│   ├─ assets/            # (vazio – imagens podem ser adicionadas aqui)
│   ├─ css/
│   │   └─ styles.css
│   └─ js/
│       └─ main.js
├─ docs/                  # documentação de apoio (não publicada)
│   ├─ briefing.md
│   ├─ mapa‑site.md
│   ├─ conteudo.md
│   └─ design‑system.md
├─ .gitignore
├─ README.md               # (este arquivo)
└─ render.yaml             # configuração do Render
```

*Todos os arquivos que devem ser servidos ao público ficam dentro de `public/`.*

---  

## ⚙️  Como rodar localmente

1. **Instale o Node.js** (versão ≥ 18). 
2. (Opcional) Instale um servidor estático simples, por exemplo **serve**: 

```bash
npm i -g serve
```

3. Execute o servidor apontando para a pasta `public`:

```bash
serve -s public
```

O site será aberto em `http://localhost:3000` (ou outra porta indicada).

> **Obs.** Não há etapa de build – o site já está em HTML/CSS/JS puro.

---  

## 🚀  Deploy no Render

1. **Crie um repositório** no GitHub (ou GitLab) e faça o push deste diretório inteiro.
2. No painel do Render, escolha **New > Static Site**.
3. Conecte o repositório recém‑criado.
4. Render detectará automaticamente o arquivo `render.yaml` e usará:
   * **Publish Path:** `public`
   * **Build Command:** _(vazio – não há compilação)_
5. Clique em **Create Static Site**. O Render irá instalar (se houver `package.json`) e servir os arquivos da pasta `public`.

---  

## 🔧  Principais ajustes já realizados

- **Caminhos** de navegação e recursos agora referenciam arquivos que estão no mesmo nível (ex.: `href="servicos.html"`).
- **Design System** totalmente respeitado: todas as cores, tipografia, espaçamentos e raios de borda são aplicados via variáveis CSS (`--color‑…`, `--spacing‑…`, etc.).
- **Responsividade** já testada nas media‑queries existentes; não há overflow horizontal nas larguras de 480 px, 768 px e 1024 px.
- **Acessibilidade**: botões têm altura mínima ≥ 44 px; o *skip‑link* está presente.

---  

## 📦  Dependências (não‑obrigatórias)

O projeto não requer nenhuma dependência npm, mas caso queira usar um servidor local ou scripts auxiliares, pode criar um `package.json` simples:

```json
{
  "name": "vertice-digital",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "serve -s public"
  }
}
```

> **Importante:** Não foram adicionadas bibliotecas externas – o objetivo é manter o site **estático** e **leve**.

---  

## 🛠️  Como fazer o commit e conectar ao Render

1. **Inicializar Git (se ainda não houver):**
   ```powershell
   cd "C:\Users\joaoa\OneDrive\Área de Trabalho\segunda avaliação da disciplina de Topicos Especiais 20261106\Pasta Principal"
   git init
   git add .
   git commit -m "Estrutura final, limpeza e configuração para Render"
   ```
2. **Criar repositório no GitHub:**
   - Acesse https://github.com e clique em **New repository**.
   - Dê um nome (ex.: `vertice-digital`).
   - Não marque nenhuma opção de README ou .gitignore – já temos os nossos.
   - Clique em **Create repository**.
3. **Adicionar o remoto e enviar o código:**
   ```powershell
   git remote add origin https://github.com/SEU_USUARIO/vertice-digital.git
   git branch -M main
   git push -u origin main
   ```
   (Substitua `SEU_USUARIO` pelo seu nome de usuário.)
4. **Conectar ao Render:**
   - Entre em https://dashboard.render.com.
   - Clique em **New > Static Site**.
   - Conecte à sua conta do GitHub e escolha o repositório `vertice-digital`.
   - Render lerá o `render.yaml` e criará o site. O domínio será algo como `vertice-digital.onrender.com`.
   - Quando o deploy terminar, acesse o URL fornecido – seu site estará online.

---  

## 📄  Licença & Créditos

- **Projeto**: fictício, desenvolvido para a disciplina de **Tópicos Especiais** (Universidade).
- **Design System**: “Darkroom Editorial” – *não deve ser alterado*; apenas referenciado.
- **Código**: livre para uso acadêmico; não contém dependências externas.

---

**Pronto!** Agora basta seguir os passos acima, fazer o push e o Render cuidará do resto. Boa apresentação!   