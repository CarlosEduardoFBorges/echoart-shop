import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Produto } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';

// agrupa os produtos recomendados de uma categoria (instrumento)
interface SecaoInstrumento {
    categoria: string;
    id: string;
    icone: string;
    produtos: Produto[];
}

@Component({
    imports: [],
    selector: 'app-home',
    styleUrl: './home.css',
    templateUrl: './home.html',
})
export class Home implements OnInit {
    private service = inject(ProdutoService);

    // signal: a tela atualiza sozinha quando o valor muda
    produtos = signal<Produto[]>([]);
    erro = signal(false);

    // ordem em que as seções aparecem na página + ícone de cada uma
    private readonly instrumentos = [
        { categoria: 'Cordas', icone: 'violao' },
        { categoria: 'Bateria e Percussão', icone: 'baqueta' },
        { categoria: 'Teclas', icone: 'piano' },
        { categoria: 'Sopro', icone: 'flauta' },
        { categoria: 'Áudio', icone: 'headphone' },
    ];

    // só entra na home o que tiver recomendado = true no db.json
    secoes = computed<SecaoInstrumento[]>(() =>
        this.instrumentos
            .map((i) => ({
                categoria: i.categoria,
                id: this.gerarId(i.categoria),
                icone: i.icone,
                produtos: this.produtos().filter(
                    (p) => p.recomendado && p.categoria === i.categoria
                ),
            }))
            .filter((s) => s.produtos.length > 0)
    );

    ngOnInit() {
        this.service.listar().subscribe({
            next: (lista) => this.produtos.set(lista),
            error: () => this.erro.set(true),
        });
    }

    // "Bateria e Percussão" -> "bateria-e-percussao" (usado nos links âncora)
    gerarId(categoria: string): string {
        return categoria
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/\s+/g, '-');
    }

    // rolagem suave até a seção (o link #id puro não funciona bem com o router)
    rolarPara(id: string, evento: Event) {
        evento.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    precoFinal(p: Produto): number {
        return p.preco * (1 - (p.desconto || 0));
    }

    percentual(p: Produto): number {
        return Math.round(p.desconto * 100);
    }

    formatar(valor: number): string {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    // produtos sem foto no json usam o ícone da categoria
    imagemDe(p: Produto): string {
        if (p.imagem) {
            return p.imagem;
        }
        const instrumento = this.instrumentos.find((i) => i.categoria === p.categoria);
        return `/assets/icons/${instrumento ? instrumento.icone : 'musica'}.svg`;
    }

    // botão "Comprar" dos cards.
    // TODO (combinar com o C. Eduardo): trocar o alert pela chamada do service do carrinho,
    // ex.: this.carrinhoService.adicionar(produto)
    adicionarAoCarrinho(produto: Produto, evento?: Event) {
        evento?.stopPropagation(); // não dispara o clique do card (modal do leo)
        alert(`${produto.nome} adicionado ao carrinho!`);
    }
}
