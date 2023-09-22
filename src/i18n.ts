import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: {
        favButtonNavLabel: 'Favoritos',
        homeButtonNavLabel: 'Inicio',
        footer: 'Hecho por ricaringa con ',
        inputPlaceholder: 'Buscar Location por ID',
        specieDetail: 'Especie',
        statusDetail: 'Estado',
        originDetail: 'Origen',
        locationDetail: 'Ubicación',
        genderDetail: 'Género',
        episodesDetail: 'Episodios',
        aboutThisEpisode: 'Acerca de éste episodio',
        airDateDetail: 'Fecha de emisión',
        episodeCodeDetail: 'Código del episodio',
        linkDetail: 'Enlace del episodio',
        onThisEpisode: 'En éste episodio',
        noResidentsMessage: 'Parece que esta ubicación no tiene residentes',
        noFavsMessage: 'Parece que no tienes personajes favoritos',
        characterLabel: 'Personaje',
        invalidInputMessage: 'Por favor ingresa un valor entre 1 y 126',
        close: 'Cerrar'
      }
    },
    en: {
      translation: {
        favButtonNavLabel: 'Favorites',
        homeButtonNavLabel: 'Home',
        footer: 'Made by ricaringa with ',
        inputPlaceholder: 'Search Location by ID',
        specieDetail: 'Species',
        statusDetail: 'Status',
        originDetail: 'Origin',
        locationDetail: 'Location',
        genderDetail: 'Gender',
        episodesDetail: 'Episodes',
        aboutThisEpisode: 'About this episode',
        airDateDetail: 'Air date',
        episodeCodeDetail: 'Episode code',
        linkDetail: 'Episode link',
        onThisEpisode: 'On this episode',
        noResidentsMessage: 'It seems this location has no residents',
        noFavsMessage: 'It seems you have no favorite characters',
        characterLabel: 'Character',
        invalidInputMessage: 'Please enter a value between 1 and 126',
        close: 'Close'
      }
    },
    fr: {
      translation: {
        favButtonNavLabel: 'Favoris',
        homeButtonNavLabel: 'Accueil',
        footer: 'Fait par ricaringa avec ',
        inputPlaceholder: 'Rechercher un lieu par ID',
        specieDetail: 'Espèce',
        statusDetail: 'Statut',
        originDetail: 'Origine',
        locationDetail: 'Emplacement',
        genderDetail: 'Genre',
        episodesDetail: 'Épisodes',
        aboutThisEpisode: 'À propos de cet épisode',
        airDateDetail: 'Date de diffusion',
        episodeCodeDetail: 'Code de l\'épisode',
        linkDetail: 'Lien de l\'épisode',
        onThisEpisode: 'Sur cet épisode',
        noResidentsMessage: 'Il semble que cet emplacement n\'ait pas de résidents',
        noFavsMessage: 'Il semble que vous n\'avez pas de personnages favoris',
        characterLabel: 'Personnage',
        invalidInputMessage: 'Veuillez entrer une valeur entre 1 et 126',
        close: 'Fermer'
      }
    },
    de: {
      translation: {
        favButtonNavLabel: 'Favoriten',
        homeButtonNavLabel: 'Startseite',
        footer: 'Gemacht von ricaringa mit ',
        inputPlaceholder: 'Standort nach ID suchen',
        specieDetail: 'Spezies',
        statusDetail: 'Status',
        originDetail: 'Herkunft',
        locationDetail: 'Ort',
        genderDetail: 'Geschlecht',
        episodesDetail: 'Episoden',
        aboutThisEpisode: 'Über diese Episode',
        airDateDetail: 'Ausstrahlungsdatum',
        episodeCodeDetail: 'Episodencode',
        linkDetail: 'Episodenlink',
        onThisEpisode: 'In dieser Episode',
        noResidentsMessage: 'Es scheint, dass dieser Ort keine Bewohner hat',
        noFavsMessage: 'Es scheint, du hast keine Lieblingscharaktere',
        characterLabel: 'Charakter',
        invalidInputMessage: 'Bitte geben Sie einen Wert zwischen 1 und 126 ein',
        close: 'Schließen'
      }
    },
    pt: {
      translation: {
        favButtonNavLabel: 'Favoritos',
        homeButtonNavLabel: 'Início',
        footer: 'Feito por ricaringa com ',
        inputPlaceholder: 'Pesquisar Localização por ID',
        specieDetail: 'Espécie',
        statusDetail: 'Status',
        originDetail: 'Origem',
        locationDetail: 'Localização',
        genderDetail: 'Gênero',
        episodesDetail: 'Episódios',
        aboutThisEpisode: 'Sobre este episódio',
        airDateDetail: 'Data de transmissão',
        episodeCodeDetail: 'Código do episódio',
        linkDetail: 'Link do episódio',
        onThisEpisode: 'Neste episódio',
        noResidentsMessage: 'Parece que este local não tem residentes',
        noFavsMessage: 'Parece que você não tem personagens favoritos',
        characterLabel: 'Personagem',
        invalidInputMessage: 'Por favor, insira um valor entre 1 e 126',
        close: 'Fechar'
      }
    },
    it: {
      translation: {
        favButtonNavLabel: 'Preferiti',
        homeButtonNavLabel: 'Home',
        footer: 'Realizzato da ricaringa con ',
        inputPlaceholder: 'Cerca Posizione per ID',
        specieDetail: 'Specie',
        statusDetail: 'Stato',
        originDetail: 'Origine',
        locationDetail: 'Posizione',
        genderDetail: 'Genere',
        episodesDetail: 'Episodi',
        aboutThisEpisode: 'Informazioni su questo episodio',
        airDateDetail: 'Data di trasmissione',
        episodeCodeDetail: 'Codice episodio',
        linkDetail: 'Link episodio',
        onThisEpisode: 'In questo episodio',
        noResidentsMessage: 'Sembra che questa posizione non abbia residenti',
        noFavsMessage: 'Sembra che tu non abbia personaggi preferiti',
        characterLabel: 'Personaggio',
        invalidInputMessage: 'Inserisci un valore compreso tra 1 e 126',
        close: 'Chiudi'
      }
    },
    ko: {
      translation: {
        favButtonNavLabel: '즐겨찾기',
        homeButtonNavLabel: '홈',
        footer: 'ricaringa 제작 ',
        inputPlaceholder: 'ID로 위치 검색',
        specieDetail: '종',
        statusDetail: '상태',
        originDetail: '기원',
        locationDetail: '위치',
        genderDetail: '성별',
        episodesDetail: '에피소드',
        aboutThisEpisode: '이 에피소드에 대해',
        airDateDetail: '방송 날짜',
        episodeCodeDetail: '에피소드 코드',
        linkDetail: '에피소드 링크',
        onThisEpisode: '이 에피소드에서',
        noResidentsMessage: '이 위치에는 주민이 없는 것으로 보입니다',
        noFavsMessage: '즐겨찾기한 캐릭터가 없는 것으로 보입니다',
        characterLabel: '캐릭터',
        invalidInputMessage: '1에서 126 사이의 값을 입력하세요',
        close: '닫기'
      }
    },
    ja: {
      translation: {
        favButtonNavLabel: 'お気に入り',
        homeButtonNavLabel: 'ホーム',
        footer: 'ricaringa 制作 ',
        inputPlaceholder: 'IDで場所を検索',
        specieDetail: '種',
        statusDetail: 'ステータス',
        originDetail: '起源',
        locationDetail: '場所',
        genderDetail: '性別',
        episodesDetail: 'エピソード',
        aboutThisEpisode: 'このエピソードについて',
        airDateDetail: '放送日',
        episodeCodeDetail: 'エピソードコード',
        linkDetail: 'エピソードリンク',
        onThisEpisode: 'このエピソードで',
        noResidentsMessage: 'この場所には住人がいないようです',
        noFavsMessage: 'お気に入りのキャラクターがないようです',
        characterLabel: 'キャラクター',
        invalidInputMessage: '1から126の値を入力してください',
        close: '閉じる'
      }
    },
    zh: {
      translation: {
        favButtonNavLabel: '收藏夹',
        homeButtonNavLabel: '主页',
        footer: '由ricaringa制作 ',
        inputPlaceholder: '按ID搜索位置',
        specieDetail: '物种',
        statusDetail: '状态',
        originDetail: '起源',
        locationDetail: '位置',
        genderDetail: '性别',
        episodesDetail: '剧集',
        aboutThisEpisode: '关于这一集',
        airDateDetail: '播出日期',
        episodeCodeDetail: '剧集代码',
        linkDetail: '剧集链接',
        onThisEpisode: '在这一集中',
        noResidentsMessage: '看起来这个位置没有居民',
        noFavsMessage: '看起来你没有收藏的角色',
        characterLabel: '角色',
        invalidInputMessage: '请输入1到126之间的值',
        close: '关闭'
      }
    },
    ru: {
      translation: {
        favButtonNavLabel: 'Избранное',
        homeButtonNavLabel: 'Главная',
        footer: 'Сделано ricaringa с ',
        inputPlaceholder: 'Поиск местоположения по ID',
        specieDetail: 'Вид',
        statusDetail: 'Статус',
        originDetail: 'Происхождение',
        locationDetail: 'Местоположение',
        genderDetail: 'Пол',
        episodesDetail: 'Эпизоды',
        aboutThisEpisode: 'О данном эпизоде',
        airDateDetail: 'Дата выхода',
        episodeCodeDetail: 'Код эпизода',
        linkDetail: 'Ссылка на эпизод',
        onThisEpisode: 'В этом эпизоде',
        noResidentsMessage: 'Кажется, что в этом местоположении нет жителей',
        noFavsMessage: 'Похоже, у вас нет избранных персонажей',
        characterLabel: 'Персонаж',
        invalidInputMessage: 'Пожалуйста, введите значение от 1 до 126',
        close: 'Закрыть'
      }
    },
    ar: {
      translation: {
        favButtonNavLabel: 'المفضلة',
        homeButtonNavLabel: 'الصفحة الرئيسية',
        footer: 'صنع بواسطة ricaringa مع ',
        inputPlaceholder: 'البحث عن موقع بالرقم التعريفي',
        specieDetail: 'نوع',
        statusDetail: 'الحالة',
        originDetail: 'الأصل',
        locationDetail: 'الموقع',
        genderDetail: 'الجنس',
        episodesDetail: 'الحلقات',
        aboutThisEpisode: 'حول هذه الحلقة',
        airDateDetail: 'تاريخ البث',
        episodeCodeDetail: 'كود الحلقة',
        linkDetail: 'رابط الحلقة',
        onThisEpisode: 'في هذه الحلقة',
        noResidentsMessage: 'يبدو أن هذا الموقع لا يحتوي على سكان',
        noFavsMessage: 'يبدو أن لديك شخصيات مفضلة',
        characterLabel: 'الشخصية',
        invalidInputMessage: 'الرجاء إدخال قيمة بين 1 و 126',
        close: 'إغلاق'
      }
    }
  }
});

export default i18n;