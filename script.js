
    // HELPERS GLOBAIS OBRIGATÓRIOS
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => [...r.querySelectorAll(s)];

    // PRODUTOS COM DADOS PLAUSÍVEIS (MÍNIMO 10 ITENS COMPLETOS)
    const PRODUCTS = [
      {
        id: "prod-1",
        title: "Blazer Estruturado em Lã Fria",
        category: "alfaiataria",
        price: 189.90,
        rrp: 449.00,
        img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
        desc: "Alfaiataria clássica desconstruída com corte anatômico, forro de cetim italiano e ombreiras leves. Essencial para compor vitrines executivas.",
        colorOverlay: "rgba(139, 92, 246, 0.2)"
      },
      {
        id: "prod-2",
        title: "Vestido Midi Acetinado com Fenda",
        category: "vestidos",
        price: 149.50,
        rrp: 389.00,
        img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
        desc: "Caimento fluido em cetim de toque de seda. Alças reguláveis e decote sutil drapeado para festas, formaturas e eventos sociais.",
        colorOverlay: "rgba(236, 72, 153, 0.2)"
      },
      {
        id: "prod-3",
        title: "Calça Pantalona em Linho com Pregas",
        category: "alfaiataria",
        price: 139.00,
        rrp: 329.90,
        img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
        desc: "Cintura alta com acabamento de alfaiate refinado, bolso faca e cós duplo. Confeccionada em viscose com linho rami de alta gramatura.",
        colorOverlay: "rgba(16, 185, 129, 0.2)"
      },
      {
        id: "prod-4",
        title: "Cardigan Canelado em Fio Nobre",
        category: "tricot",
        price: 119.00,
        rrp: 289.00,
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
        desc: "Trama texturizada em malharia retilínea com botões em resina tartaruga. Toque macio que não pinica nem faz bolinhas após lavagem.",
        colorOverlay: "rgba(245, 158, 11, 0.2)"
      },
      {
        id: "prod-5",
        title: "Bolsa Baguette em Couro Genuíno",
        category: "acessorios",
        price: 159.00,
        rrp: 399.00,
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
        desc: "Ferragens douradas com banho antioxidação e fecho magnético suíço. Acompanha duas alças removíveis para uso a tiracolo ou ombro.",
        colorOverlay: "rgba(139, 92, 246, 0.3)"
      },
      {
        id: "prod-6",
        title: "Camisa Oversized em Algodão Egípcio",
        category: "alfaiataria",
        price: 129.00,
        rrp: 299.90,
        img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80",
        desc: "Fiação 80 fios pura com toque aveludado e botões de madrepérola. Visual urbano despojado que se adapta do casual chic ao corporativo.",
        colorOverlay: "rgba(255, 255, 255, 0.1)"
      },
      {
        id: "prod-7",
        title: "Vestido Longo Boho em Crepe Georgette",
        category: "vestidos",
        price: 179.00,
        rrp: 429.00,
        img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
        desc: "Manga flare delicada e cintura marcada por elastex artesanal. Estampa floral digital exclusiva desenvolvida por designers parceiros.",
        colorOverlay: "rgba(239, 68, 68, 0.2)"
      },
      {
        id: "prod-8",
        title: "Cropped Tricot Canelado Gola Alta",
        category: "tricot",
        price: 89.90,
        rrp: 199.00,
        img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
        desc: "Comprimento estratégico e elastano integrado para ajuste anatômico em todos os corpos sem deformar o tecido com o uso contínuo.",
        colorOverlay: "rgba(59, 130, 246, 0.2)"
      },
      {
        id: "prod-9",
        title: "Cinto Largo Couro com Fivela Orgânica",
        category: "acessorios",
        price: 69.00,
        rrp: 169.00,
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
        desc: "Couro legítimo com pespontos duplos reforçados e acabamento de borda polida a mão. Eleva qualquer composição básica de vestido ou blazer.",
        colorOverlay: "rgba(107, 114, 128, 0.2)"
      },
      {
        id: "prod-10",
        title: "Trench Coat Tradicional Repelente à Água",
        category: "alfaiataria",
        price: 249.00,
        rrp: 590.00,
        img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80",
        desc: "Tecido encorpado com película impermeável fosca, faixa removível de amarração frontal e fivelas forradas no mesmo tecido da peça.",
        colorOverlay: "rgba(139, 92, 246, 0.25)"
      }
    ];

    // ESTADO REATIVO COM LOCALSTORAGE SEGURO
    let cart = [];
    let wishlist = [];

    const loadStorage = () => {
      try {
        const savedCart = localStorage.getItem('fs_cart');
        if (savedCart) cart = JSON.parse(savedCart);
        const savedWish = localStorage.getItem('fs_wishlist');
        if (savedWish) wishlist = JSON.parse(savedWish);
      } catch (e) {
        console.warn('Storage inacessível:', e);
      }
    };

    const saveStorage = () => {
      try {
        localStorage.setItem('fs_cart', JSON.stringify(cart));
        localStorage.setItem('fs_wishlist', JSON.stringify(wishlist));
      } catch (e) {
        console.warn('Erro ao salvar storage:', e);
      }
    };

    // SISTEMA DE TOAST
    const showToast = (message) => {
      const shelf = $('#toast-shelf');
      if (!shelf) return;
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerText = message;
      shelf.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
      }, 3200);
    };

    // FORMATAÇÃO DE MOEDA
    const formatBRL = (val) => Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // RENDERIZADOR DE CARDS PINTEREST
    const createProductCard = (p) => {
      const isWish = wishlist.some(i => i.id === p.id);
      return `
        <article class="pin-card" data-id="${p.id}">
          <div class="pin-media" data-action="view-product" data-id="${p.id}">
            <img src="${p.img}" alt="${p.title}" loading="lazy">
            <div class="pin-actions-float">
              <button class="icon-btn btn-sm btn-wishlist ${isWish ? 'active' : ''}" data-action="toggle-wish" data-id="${p.id}" title="Favoritar" aria-label="Favoritar">
                <svg width="14" height="14" fill="${isWish ? 'var(--primary)' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </button>
            </div>
          </div>
          <div class="pin-body">
            <div class="pin-tag">${p.category}</div>
            <h3 class="pin-title" data-action="view-product" data-id="${p.id}">${p.title}</h3>
            <div class="pin-meta">
              <div>
                <div class="pin-price">${formatBRL(p.price)}</div>
                <div class="pin-wholesale">Sugerido: ${formatBRL(p.rrp)}</div>
              </div>
            </div>
            <button class="btn-card-add" data-action="add-cart" data-id="${p.id}">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
              Adicionar ao Lote
            </button>
          </div>
        </article>
      `;
    };

    // RENDERIZAR GRIDS
    const renderCatalog = (filter = 'all', query = '') => {
      const grid = $('#full-catalog-grid');
      if (!grid) return;
      let list = PRODUCTS;
      if (filter !== 'all') list = list.filter(p => p.category === filter);
      if (query.trim() !== '') {
        const q = query.toLowerCase();
        list = list.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
      }
      grid.innerHTML = list.length ? list.map(createProductCard).join('') : '<p style="color:var(--text-muted); grid-column:1/-1; padding:40px; text-align:center;">Nenhuma peça encontrada para estes critérios.</p>';
    };

    const renderFeatured = () => {
      const grid = $('#home-featured-grid');
      if (!grid) return;
      grid.innerHTML = PRODUCTS.slice(0, 4).map(createProductCard).join('');
    };

    // SISTEMA DE NAVEGAÇÃO SPA
    const initNavigation = () => {
      try {
        const switchPage = (pageId) => {
          $$('.page-section').forEach(s => s.classList.remove('active'));
          $$('.nav-link').forEach(l => l.classList.remove('active'));

          const target = $(`[data-page="${pageId}"]`);
          if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          $$(`[data-navigate="${pageId}"]`).forEach(l => l.classList.add('active'));
          $('#mobile-nav').classList.remove('open');
          window.location.hash = pageId;
        };

        document.addEventListener('click', (e) => {
          const btn = e.target.closest('[data-navigate]');
          if (btn) {
            e.preventDefault();
            switchPage(btn.getAttribute('data-navigate'));
          }
        });

        const initialHash = window.location.hash.replace('#', '') || 'inicio';
        switchPage(initialHash);

        $('#mobile-toggle')?.addEventListener('click', () => {
          $('#mobile-nav').classList.toggle('open');
        });
      } catch (err) {
        console.error('Erro na navegação:', err);
      }
    };

    // SISTEMA DE CARRINHO E SACOLA
    const updateCartUI = () => {
      const badge = $('#cart-badge');
      const container = $('#cart-items-container');
      const subtotalEl = $('#cart-subtotal');
      const totalEl = $('#cart-total');

      const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
      if (badge) badge.innerText = totalCount;

      const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
      if (subtotalEl) subtotalEl.innerText = formatBRL(subtotal);
      if (totalEl) totalEl.innerText = formatBRL(subtotal);

      if (!container) return;
      if (cart.length === 0) {
        container.innerHTML = `
          <div style="text-align:center; padding:50px 20px; color:var(--text-muted);">
            <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 12px; opacity:0.5;" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <p>Sua sacola de pedidos está vazia.</p>
            <button class="btn btn-primary btn-sm" data-navigate="catalogo" style="margin-top:14px;" onclick="$('#cart-drawer').classList.remove('open'); $('#cart-overlay').classList.remove('open');">Explorar Coleção</button>
          </div>
        `;
        return;
      }

      container.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.title}">
          <div>
            <div style="font-weight:700; font-size:0.88rem;">${item.title}</div>
            <div style="font-size:0.8rem; color:var(--primary); font-weight:700; margin-top:2px;">${formatBRL(item.price)} cada</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" data-action="cart-minus" data-id="${item.id}">-</button>
              <span style="font-size:0.82rem; font-weight:bold; min-width:18px; text-align:center;">${item.qty}</span>
              <button class="qty-btn" data-action="cart-plus" data-id="${item.id}">+</button>
            </div>
          </div>
          <button class="icon-btn btn-sm" data-action="cart-remove" data-id="${item.id}" title="Remover" style="border:none; color:var(--text-muted);">✕</button>
        </div>
      `).join('');
    };

    const addToCart = (product, quantity = 1) => {
      const exist = cart.find(i => i.id === product.id);
      if (exist) {
        exist.qty += quantity;
      } else {
        cart.push({ ...product, qty: quantity });
      }
      saveStorage();
      updateCartUI();
      showToast(`Adicionado à sacola: ${product.title}`);
    };

    // SISTEMA DE WISHLIST
    const updateWishlistUI = () => {
      const badge = $('#wishlist-badge');
      const container = $('#wishlist-items-container');
      if (badge) badge.innerText = wishlist.length;

      if (!container) return;
      if (wishlist.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:50px 20px;">Nenhum produto salvo como favorito.</p>';
        return;
      }

      container.innerHTML = wishlist.map(item => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.title}">
          <div>
            <div style="font-weight:700; font-size:0.88rem;">${item.title}</div>
            <div style="font-size:0.8rem; color:var(--primary); font-weight:700;">${formatBRL(item.price)}</div>
            <button class="btn btn-primary btn-sm" data-action="add-cart" data-id="${item.id}" style="margin-top:8px;">Mover p/ Sacola</button>
          </div>
          <button class="icon-btn btn-sm" data-action="toggle-wish" data-id="${item.id}" title="Remover">✕</button>
        </div>
      `).join('');
    };

    const toggleWishlist = (product) => {
      const index = wishlist.findIndex(i => i.id === product.id);
      if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`Removido dos favoritos: ${product.title}`);
      } else {
        wishlist.push(product);
        showToast(`Adicionado aos favoritos: ${product.title}`);
      }
      saveStorage();
      updateWishlistUI();
      renderCatalog();
      renderFeatured();
    };

    // DELEGAÇÃO DE EVENTOS DE COMPRA E FAVORITO
    const initActionDelegation = () => {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const action = btn.getAttribute('data-action');
        const id = btn.getAttribute('data-id');
        const product = PRODUCTS.find(p => p.id === id);

        if (action === 'add-cart' && product) {
          addToCart(product, 1);
        } else if (action === 'toggle-wish' && product) {
          toggleWishlist(product);
        } else if (action === 'cart-plus') {
          const item = cart.find(i => i.id === id);
          if (item) { item.qty += 1; saveStorage(); updateCartUI(); }
        } else if (action === 'cart-minus') {
          const item = cart.find(i => i.id === id);
          if (item && item.qty > 1) {
            item.qty -= 1;
          } else {
            cart = cart.filter(i => i.id !== id);
          }
          saveStorage(); updateCartUI();
        } else if (action === 'cart-remove') {
          cart = cart.filter(i => i.id !== id);
          saveStorage(); updateCartUI();
        } else if (action === 'view-product' && product) {
          openProductModal(product);
        }
      });
    };

    // MODAL DE DETALHES COM ZOOM ESTILO APPLE / LUXO
    let selectedModalProduct = null;
    const openProductModal = (product) => {
      selectedModalProduct = product;
      $('#modal-img').src = product.img;
      $('#modal-tag').innerText = product.category;
      $('#modal-title').innerText = product.title;
      $('#modal-price').innerText = formatBRL(product.price);
      $('#modal-rrp').innerText = formatBRL(product.rrp);
      $('#modal-desc').innerText = product.desc;
      $('#product-modal').classList.add('open');
    };

    const initProductModal = () => {
      try {
        const modal = $('#product-modal');
        const closeBtn = $('#modal-close-btn');
        const zoomBox = $('#zoom-box');
        const zoomImg = $('#modal-img');

        closeBtn?.addEventListener('click', () => modal.classList.remove('open'));
        modal?.addEventListener('click', (e) => {
          if (e.target === modal) modal.classList.remove('open');
        });

        // Zoom interativo que acompanha o mouse
        zoomBox?.addEventListener('mousemove', (e) => {
          const rect = zoomBox.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          zoomImg.style.transformOrigin = `${x}% ${y}%`;
          zoomImg.style.transform = 'scale(1.85)';
        });
        zoomBox?.addEventListener('mouseleave', () => {
          zoomImg.style.transform = 'scale(1)';
        });

        $('#modal-btn-add')?.addEventListener('click', () => {
          if (selectedModalProduct) {
            addToCart(selectedModalProduct, 1);
            modal.classList.remove('open');
          }
        });
      } catch (err) {
        console.error('Erro no modal de zoom:', err);
      }
    };

    // PROVADOR VIRTUAL INTERATIVO
    const initVirtualFitting = () => {
      try {
        const selector = $('#fitting-item-selector');
        const modelImg = $('#virtual-model-img');
        const overlay = $('#virtual-garment-overlay');
        const heightSlider = $('#slider-height');
        const heightVal = $('#slider-height-val');
        const lblSize = $('#lbl-mannequin-size');
        const lblHeight = $('#lbl-mannequin-height');

        if (!selector) return;

        // Povoar produtos no seletor do provador
        selector.innerHTML = PRODUCTS.map(p => `<option value="${p.id}">${p.title} - ${formatBRL(p.price)}</option>`).join('');

        const updateFittingLook = () => {
          const curr = PRODUCTS.find(p => p.id === selector.value);
          if (curr && overlay) {
            overlay.style.backgroundColor = curr.colorOverlay;
          }
        };

        selector.addEventListener('change', updateFittingLook);
        updateFittingLook();

        // Alterar silhueta/tamanhos
        $$('.preset-btn[data-size]').forEach(btn => {
          btn.addEventListener('click', () => {
            $$('.preset-btn[data-size]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const sz = btn.getAttribute('data-size');
            if (lblSize) lblSize.innerText = `Tamanho ${sz}`;
            showToast(`Manequim ajustado para ${sz}`);
          });
        });

        // Controle deslizante de altura com feedback visual em tempo real
        heightSlider?.addEventListener('input', (e) => {
          const val = (e.target.value / 100).toFixed(2);
          if (heightVal) heightVal.innerText = `${val}m`;
          if (lblHeight) lblHeight.innerText = `${val} m`;
          const scaleY = 0.9 + (e.target.value - 155) * 0.005;
          if (modelImg) modelImg.style.transform = `scaleY(${scaleY})`;
        });

        // Modos de luz de estúdio
        $('#btn-light-day')?.addEventListener('click', () => {
          $('#stage-box').style.background = '#1a1a1a';
          showToast('Luz Natural simulada.');
        });
        $('#btn-light-studio')?.addEventListener('click', () => {
          $('#stage-box').style.background = '#282538';
          showToast('Holofote de Passarela ativado.');
        });
        $('#btn-light-warm')?.addEventListener('click', () => {
          $('#stage-box').style.background = '#2c1e14';
          showToast('Temperatura Quente/Lounge simulada.');
        });

        // Adicionar direto do provador para o carrinho
        $('#btn-add-from-fitting')?.addEventListener('click', () => {
          const prod = PRODUCTS.find(p => p.id === selector.value);
          if (prod) {
            addToCart(prod, 1);
            $('#cart-drawer').classList.add('open');
            $('#cart-overlay').classList.add('open');
          }
        });
      } catch (e) {
        console.error('Erro no provador virtual:', e);
      }
    };

    // FORMULÁRIOS COM TRATAMENTO DE ERROS E INTEGRAÇÃO WHATSAPP / STRIPE
    const initFormsAndCheckout = () => {
      try {
        // Checkout do carrinho para WhatsApp com discriminação Stripe
        $('#btn-checkout-whatsapp')?.addEventListener('click', () => {
          if (cart.length === 0) {
            showToast('Sua sacola está vazia.');
            return;
          }
          const storeName = $('#order-store-name').value.trim() || 'Lojista Parceiro';
          const city = $('#order-city').value.trim() || 'Não informada';
          const payMethod = $('#order-payment-method').value;
          const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

          let msg = `*NOVO PEDIDO ATACADO - FASHIONSTORE*\n`;
          msg += `*Loja:* ${storeName}\n`;
          msg += `*Localidade:* ${city}\n`;
          msg += `*Forma de Faturamento:* ${payMethod}\n\n`;
          msg += `*ITENS DO PEDIDO:*\n`;

          cart.forEach(item => {
            msg += `• ${item.qty}x ${item.title} (${formatBRL(item.price)} un.) = ${formatBRL(item.price * item.qty)}\n`;
          });

          msg += `\n*TOTAL DO PEDIDO:* ${formatBRL(subtotal)}\n`;
          msg += `\n_Por favor, confirme a disponibilidade de grade e envie o link do faturamento Stripe ou dados do PIX._`;

          const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
          window.open(url, '_blank');
        });

        // Formulário B2B Lojista
        $('#form-b2b')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const comp = $('#b2b-company').value.trim();
          const cnpj = $('#b2b-cnpj').value.trim();
          const city = $('#b2b-city').value.trim();
          const phone = $('#b2b-phone').value.trim();

          const text = `*CADASTRO DE LOJISTA VIP*\n\nEmpresa: ${comp}\nCNPJ/CPF: ${cnpj}\nLocal: ${city}\nWhatsApp: ${phone}\n\nSolicito validação cadastral e tabela de atacado.`;
          window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
          showToast('Cadastro encaminhado ao consultor.');
        });

        // Formulário de Contato Geral
        $('#form-contact')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = $('#contact-name').value.trim();
          const tel = $('#contact-tel').value.trim();
          const type = $('#contact-type').value;
          const userMsg = $('#contact-msg').value.trim();

          const text = `*CONTATO COMERCIAL FASHIONSTORE*\n\nNome: ${name}\nTelefone: ${tel}\nTipo de Loja: ${type}\nMensagem: ${userMsg}`;
          window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
          showToast('Mensagem enviada com sucesso!');
        });
      } catch (err) {
        console.error('Erro nos formulários:', err);
      }
    };

    // GAVETAS LATERAIS (DRAWER OVERLAYS)
    const initDrawers = () => {
      try {
        const cartDrawer = $('#cart-drawer');
        const cartOverlay = $('#cart-overlay');
        const wishDrawer = $('#wishlist-drawer');
        const wishOverlay = $('#wishlist-overlay');

        const openCart = () => { cartDrawer.classList.add('open'); cartOverlay.classList.add('open'); };
        const closeCart = () => { cartDrawer.classList.remove('open'); cartOverlay.classList.remove('open'); };
        const openWish = () => { wishDrawer.classList.add('open'); wishOverlay.classList.add('open'); };
        const closeWish = () => { wishDrawer.classList.remove('open'); wishOverlay.classList.remove('open'); };

        $('#btn-open-cart')?.addEventListener('click', openCart);
        $('#btn-close-cart')?.addEventListener('click', closeCart);
        cartOverlay?.addEventListener('click', closeCart);

        $('#btn-open-wishlist')?.addEventListener('click', openWish);
        $('#btn-close-wishlist')?.addEventListener('click', closeWish);
        wishOverlay?.addEventListener('click', closeWish);

        $('#btn-move-all-cart')?.addEventListener('click', () => {
          if (wishlist.length === 0) {
            showToast('A Wishlist está vazia.');
            return;
          }
          wishlist.forEach(p => addToCart(p, 1));
          wishlist = [];
          saveStorage();
          updateWishlistUI();
          closeWish();
          openCart();
          showToast('Todas as peças foram migradas para a Sacola.');
        });
      } catch (e) {
        console.error('Erro nos Drawers:', e);
      }
    };

    // FILTROS E BUSCA DO CATÁLOGO
    const initFilters = () => {
      try {
        const pills = $$('.filter-pills .pill');
        const search = $('#catalog-search');

        pills.forEach(pill => {
          pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderCatalog(pill.getAttribute('data-category'), search ? search.value : '');
          });
        });

        search?.addEventListener('input', (e) => {
          const activeCat = $('.filter-pills .pill.active')?.getAttribute('data-category') || 'all';
          renderCatalog(activeCat, e.target.value);
        });
      } catch (e) {
        console.error('Erro nos filtros:', e);
      }
    };

    // DARK / LIGHT THEME TOGGLE
    const initTheme = () => {
      try {
        const toggle = $('#theme-toggle');
        let currentTheme = 'dark';
        try {
          currentTheme = localStorage.getItem('fs_theme') || 'dark';
        } catch (e) {}

        const applyTheme = (theme) => {
          document.documentElement.setAttribute('data-theme', theme);
          try { localStorage.setItem('fs_theme', theme); } catch (e) {}
        };

        applyTheme(currentTheme);

        toggle?.addEventListener('click', () => {
          currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
          applyTheme(currentTheme);
          showToast(`Modo ${currentTheme === 'dark' ? 'Escuro' : 'Claro'} ativado.`);
        });
      } catch (e) {
        console.error('Erro no tema:', e);
      }
    };

    // CONTADORES NUMÉRICOS DINÂMICOS
    const initCounters = () => {
      try {
        const counters = $$('.stat-number');
        let triggered = false;

        const startCounting = () => {
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = target / 50;
            const update = () => {
              count += speed;
              if (count < target) {
                counter.innerText = Math.ceil(count).toLocaleString('pt-BR');
                requestAnimationFrame(update);
              } else {
                counter.innerText = target.toLocaleString('pt-BR');
              }
            };
            update();
          });
        };

        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !triggered) {
              triggered = true;
              startCounting();
            }
          });
        }, { threshold: 0.3 });

        const bar = $('.stats-bar');
        if (bar) obs.observe(bar);
      } catch (e) {
        console.error('Erro nos contadores:', e);
      }
    };

    // BARRA DE PROGRESSO DE ROLAGEM
    const initScrollProgress = () => {
      window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const bar = $('#scroll-progress');
        if (bar) bar.style.width = scrolled + '%';
      }, { passive: true });
    };

    // INICIALIZAÇÃO SEGURA
    document.addEventListener('DOMContentLoaded', () => {
      loadStorage();
      initNavigation();
      initTheme();
      initDrawers();
      initActionDelegation();
      initProductModal();
      initVirtualFitting();
      initFormsAndCheckout();
      initFilters();
      initCounters();
      initScrollProgress();

      renderCatalog();
      renderFeatured();
      updateCartUI();
      updateWishlistUI();
    });
  