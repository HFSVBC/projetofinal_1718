create table disciplina (
  id int primary key auto_increment,
  designacao varchar(50) not null,
  prof_t int not null,
  prof_tp int,
  prof_pl int,
  foreign key(prof_t) references users(id),
  foreign key(prof_tp) references users(id),
  foreign key(prof_pl) references users(id)
);

create table espaco (
  id int primary key auto_increment,
  bloco int not null,
  piso int not null,
  sala int not null
);

create table disciplina_aluno (
  id int primary key auto_increment,
  id_disciplina int not null,
  id_aluno int not null,
  foreign key(id_disciplina) references disciplina(id),
  foreign key(id_aluno) references users(id)
);

create table aula (
  id int primary key auto_increment,
  data_inicio timestamp not null,
  data_fim timestamp not null,
  tipo int not null,
  espaco int not null,
  disciplina int not null,
  foreign key(espaco) references espaco(id),
  foreign key(disciplina) references disciplina(id)
);

create table presencas (
  id int primary key auto_increment,
  aula int not null,
  aluno int not null,
  foreign key(aula) references aula(id),
  foreign key(aluno) references users(id)
);

create table acesso (
  id int primary key auto_increment,
  data_entrada timestamp not null,
  data_fim timestamp not null,
  espaco int not null,
  user int not null,
  foreign key(espaco) references espaco(id),
  foreign key(user) references users(id)
);
