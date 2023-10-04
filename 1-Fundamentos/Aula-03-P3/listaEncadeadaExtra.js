class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    adicionar(valor) {
        const novoNo = new Node(valor);
        if (!this.cabeca) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    print(){
        var aux = this.header;
        while(aux!=null){
            console.log("lista Encadeada" + aux.element);
            aux=aux.next;
        }
    }

    // Outros métodos como remover, buscar, etc., podem ser implementados aqui.
}
