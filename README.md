# DIO Bitcoin Wallet Generator

Um gerador de carteira Bitcoin simples em JavaScript que cria carteiras determinísticas hierárquicas (HD Wallets) usando padrões BIP.

## 📋 Descrição

Este projeto implementa um gerador de carteira Bitcoin que utiliza os seguintes padrões:
- **BIP39**: Para geração de seed phrases mnemônicas
- **BIP32**: Para carteiras determinísticas hierárquicas (HD Wallets)
- **BIP49**: Para endereços P2SH-P2WPKH (Pay-to-Script-Hash Pay-to-Witness-Public-Key-Hash)

## 🚀 Funcionalidades

- ✅ Geração de seed phrase mnemônica de 12 palavras
- ✅ Criação de carteira HD (Hierarchical Deterministic)
- ✅ Suporte à rede de teste Bitcoin (testnet)
- ✅ Geração de endereços P2SH-P2WPKH
- ✅ Exportação de chave privada em formato WIF

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd dio-btcwallet
```

2. Instale as dependências:
```bash
npm install
```

## 🛠️ Uso

Execute o gerador de carteira:

```bash
node src/createWallet.js
```

### Saída

O script irá gerar e exibir:

- **Seed Phrase (Mnemonic)**: 12 palavras para backup da carteira
- **Wallet Address**: Endereço público da carteira
- **Private Key (WIF)**: Chave privada em formato WIF
- **Derivation Path**: Caminho de derivação usado (m/49'/1'/0'/0/0)

### Exemplo de Saída

```
Seed Phrase (Mnemonic): abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
Wallet Address: 2N1LGaGg836mqSQqiuUBLQcyUBvdYbK2Ybr
Private Key (WIF): cVpF924EspNh8KjYsf5YMcvuFJxjryAc8Z2PonYmuqYyYGmSKuht
Derivation Path: m/49'/1'/0'/0/0
```

## 🔧 Configuração

### Rede

O projeto está configurado para usar a **testnet** do Bitcoin por padrão. Para mudar para a rede principal (mainnet), modifique a linha:

```javascript
const network = bitcoin.networks.testnet;
```

Para:

```javascript
const network = bitcoin.networks.bitcoin;
```

### Caminho de Derivação

O caminho de derivação padrão é `m/49'/1'/0'/0/0`:
- `m/49'`: BIP49 (P2SH-P2WPKH)
- `1'`: Testnet
- `0'`: Account 0
- `0`: Change address (0 = receiving, 1 = change)
- `0`: Index do endereço

## 📚 Dependências

- **bip32**: Implementação de carteiras determinísticas hierárquicas
- **bip39**: Geração e validação de seed phrases mnemônicas
- **bitcoinjs-lib**: Biblioteca JavaScript para Bitcoin

## ⚠️ Importante

### Segurança

- **NUNCA** compartilhe sua seed phrase ou chave privada
- **SEMPRE** faça backup da seed phrase em local seguro
- Este projeto é para fins educacionais
- Use apenas na testnet para testes

### Backup

A seed phrase é a forma mais importante de backup da sua carteira. Com ela, você pode recuperar todos os seus fundos em qualquer dispositivo compatível.


## 📄 Licença

Este projeto está licenciado sob a licença Apache v2.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request.


---

**Nota**: Este projeto foi criado para fins educacionais como parte do curso DIO. Use com responsabilidade e sempre priorize a segurança ao lidar com criptomoedas.
