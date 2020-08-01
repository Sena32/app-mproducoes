<!-- TOC -->

- [App Mproduções](#App-Mproduções)
  - [Como usar a imagem?](#como-usar-a-imagem)
  - [Compile a imagem Docker a partir do DockerFile.](#compile-a-imagem-docker-a-partir-do-dockerfile)

<!-- TOC -->

### App Mproduções

A imagem desta aplicação pode ser obtida através desta URL:

https://hub.docker.com/repository/docker/ailtonsena/app-mproducoes

O aplicativo roda a partir da imagem do apache: httpd:2.4.


## Como usar a imagem?

* Baixe a imagem do DockerHub:

```sh
docker pull ailtonsena/app-mproducoes:1.0.0
```

* Crie um contêiner com uma das formas abaixo, especificando a porta padrão do apache: PORT 80.

I) rodando em background:

```sh
docker run -d -p 80:80 --name=ctn1 ailtonsena/app-mproducoes:1.0.0
```

## Compile a imagem Docker a partir do DockerFile.

* Baixe o código do repositório Git.

```sh
git clone https://github.com/Sena32/app-mproducoes
```

```sh
docker build -t ailtonsena/app-mproducoes .
```

```sh
docker run -d -p 80:80 --name unipe ailtonsena/app-mproducoes:1.0.0
```


