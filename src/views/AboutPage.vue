<template>
  <div class="home">
    <section class="aboutMe">
      <div class="aboutMe__grid">
        <div class="aboutMe__container">
          <h3 class="aboutMe__name">Александр</h3>
          <p class="aboutMe__prof">Фронтенд-разработчик, 28 лет</p>
          <p class="aboutMe__description">
            Имею высшее техническое образование в сфере электроэнергетики, а также коммерческий опыт
            разработки веб приложений.
            <br />
            Люблю изучать что-то новое, стараюсь постоянно актуализировать свои знания, улучшать
            внутренние рабочие процессы для ускорения решения задач в области веб разработки. Всегда
            нацелен на результат (готов даже тратить на это своё свободное время), буду рад работать
            в команде, готов поддержать приятное и продуктивное общение. При необходимости готов
            изучать технологии, которые не входят в мой список навыков. Увлекаюсь шахматами,
            изучением английского языка, сноубордингом, люблю путешествовать (в планах на будущее
            сходить в горы с палатками).
          </p>
          <a
            class="aboutMe__git-link"
            href="https://github.com/MethodM4N"
            rel="noreferrer"
            target="_blank"
            >Github</a
          >
          <a
            class="aboutMe__git-link"
            href="https://t.me/Methodmvn"
            rel="noreferrer"
            target="_blank"
            >Telegram</a
          >
        </div>
        <img
          class="aboutMe__photo"
          :src="require('@/assets/img/photoAboutMe.jpg')"
          alt="Фото студента"
        />
      </div>
    </section>
  </div>
</template>

<style>
.aboutMe {
  padding: 0 70px 0;
  margin: 0 auto;
}

@media screen and (max-width: 885px) {
  .aboutMe {
    padding: 0 50px 0;
  }
}

@media screen and (max-width: 685px) {
  .aboutMe {
    padding: 0 14px 0;
  }
}

.aboutMe__prof {
  font-weight: 510;
}

.aboutMe__grid {
  display: grid;
  justify-items: center;
  margin: 0 0 101px;
  grid-template-columns: 1fr 0.5fr;
  gap: 0 50px;
}

.aboutMe__git-link {
  width: fit-content;
}

.aboutMe__git-link:last-of-type {
  margin-bottom: 20px;
}

.aboutMe__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
}

@media screen and (max-width: 1050px) {
  .aboutMe__grid {
    margin: 0 0 91px;
    grid-template-columns: 1fr 0.5fr;
    gap: 0 49px;
  }
}

@media screen and (max-width: 685px) {
  .aboutMe__grid {
    grid-template-columns: 1fr;
    margin: 0;
    gap: 40px;
  }
}

.aboutMe__photo {
  width: 270px;
  height: 327px;
  border-radius: 11px;
  object-fit: cover;
  justify-self: end;
}

@media screen and (max-width: 950px) {
  .aboutMe__photo {
    max-width: 255px;
    max-height: 307px;
    justify-self: end;
  }
}

@media screen and (max-width: 685px) {
  .aboutMe__photo {
    max-width: 292px;
    max-height: 352px;
    justify-self: center;
    grid-row: 1/1;
  }
}
</style>
