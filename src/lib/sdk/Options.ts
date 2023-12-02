export const Gradients = {
  // Blue: '--gradient-left: #007cff;--gradient-right: #56CCF2;--check: #2b77c1;',
  // Green: '--gradient-left: #38ff00;--gradient-right: #56F27D;--check: #2bc142;',
  // Aurora: '--gradient-left: #8b00ff;--gradient-right: #56F27D;--check: #2b5fc1;',
  // Fire: '--gradient-left: #ffcb00;--gradient-right: #F25D56;--check: #c1712b;',
  // Red: '--gradient-left: #ff3c00;--gradient-right: #F25D56;--check: #c12b2b;',
  // Purple: '--gradient-left: #ff00cb;--gradient-right: #E656F2;--check: #c12b5f;',
  // Lavender: '--gradient-left: #af00ff;--gradient-right: #E656F2;--check: #bc2bc1;',
  // Nexus: '--gradient-left: #ff6302;--gradient-right: #ffc266;--check: #ffa820;',
  Blue: {
    left: '#007cff',
    right: '#56CCF2',
    check: '#2b77c1',
  },
  Green: {
    left: '#38ff00',
    right: '#56F27D',
    check: '#2bc142',
  },
  Aurora: {
    left: '#8b00ff',
    right: '#56F27D',
    check: '#2b5fc1',
  },
  Fire: {
    left: '#ffcb00',
    right: '#F25D56',
    check: '#c1712b',
  },
  Red: {
    left: '#ff3c00',
    right: '#F25D56',
    check: '#c12b2b',
  },
  Purple: {
    left: '#ff00cb',
    right: '#E656F2',
    check: '#c12b5f',
  },
  Lavender: {
    left: '#af00ff',
    right: '#E656F2',
    check: '#bc2bc1',
  },
  Nexus: {
    left: '#ff6302',
    right: '#ffc266',
    check: '#ffa820',
  },
};
export type UVCOptions = {
  /** @deprecated Light mode is currently unsupported */
  dark: boolean;
  /** Should we use a solid background? Defaults to true on safari, false everywhere else */
  solidBg: boolean;
  /** Text messages you can overwrite - useful for internationalization */
  strings: Partial<{
    /** I'm not a robot/I'm a human type message */
    NotARobot: string;
    /** Drag the (slider|puzzle) to complete the puzzle */
    SlideToVerify: string;
  }>;
  /** Colour Pallete used */
  colours:
    | {
        /** Gradient Left */
        left: string;
        /** Gradient Right */
        right: string;
        /** Checkmark colour */
        check: string;
      }
    | {
        /** Hex colour */
        hex: string;
      }
    | null;
  /** Should we use a slider? Defaults to true */
  slider: boolean;
  /** Target Image Hue - if null, will use default */
  targetHue: boolean | null;
};

export const i18n = {
  human: {
    en: ["I'm not a robot", "I'm a human", 'I am not a robot', 'I am a human'],
    zh: ['我不是机器人', '我是人类', '我不是机器人', '我是人类'],
    es: ['No soy un robot', 'Soy humano', 'No soy un robot', 'Soy un humano'],
    hi: [
      'मैं रोबोट नहीं हूं',
      'मैं इंसान हूं',
      'मैं रोबोट नहीं हूं',
      'मैं एक इंसान हूं',
    ],
    ar: ['أنا لست آلة', 'أنا إنسان', 'أنا لست روبوت', 'أنا إنسان'],
    pt: ['Não sou um robô', 'Sou humano', 'Não sou um robô', 'Sou um humano'],
    bn: ['আমি রোবট নই', 'আমি মানব', 'আমি রোবট নই', 'আমি একজন মানব'],
    ru: ['Я не робот', 'Я человек', 'Я не робот', 'Я человек'],
    ja: [
      '私はロボットではありません',
      '私は人間です',
      '私はロボットではありません',
      '私は人間です',
    ],
    pa: [
      'ਮੈਂ ਰੋਬੋਟ ਨਹੀਂ ਹਾਂ',
      'ਮੈਂ ਇਨਸਾਨ ਹਾਂ',
      'ਮੈਂ ਰੋਬੋਟ ਨਹੀਂ ਹਾਂ',
      'ਮੈਂ ਇੱਕ ਇਨਸਾਨ ਹਾਂ',
    ],
    de: [
      'Ich bin kein Roboter',
      'Ich bin ein Mensch',
      'Ich bin kein Roboter',
      'Ich bin ein Mensch',
    ],
    fr: [
      'Je ne suis pas un robot',
      'Je suis humain',
      'Je ne suis pas un robot',
      'Je suis un humain',
    ],
    it: [
      'Non sono un robot',
      'Sono umano',
      'Non sono un robot',
      'Sono un umano',
    ],
    id: [
      'Saya bukan robot',
      'Saya manusia',
      'Saya bukan robot',
      'Saya seorang manusia',
    ],
    tr: [
      'Ben bir robot değilim',
      'Ben bir insanım',
      'Ben bir robot değilim',
      'Ben bir insanım',
    ],
    sq: [
      'Unë nuk jam robot',
      'Unë jam njeri',
      'Unë nuk jam robot',
      'Unë jam njeri',
    ],
  },
  slide: {
    en: [
      'Drag the slider to complete the puzzle',
      'Drag the puzzle piece to complete the puzzle',
      'Drag the slider',
      'Drag the puzzle piece',
      'Slide the puzzle piece to complete the puzzle',
      'Slide the slider to complete the puzzle',
      'Move the puzzle piece to complete the puzzle',
    ],
    zh: [
      '拖动滑块以完成拼图',
      '拖动拼图块以完成拼图',
      '拖动滑块',
      '拖动拼图块',
      '滑动拼图块以完成拼图',
      '滑动滑块以完成拼图',
      '移动拼图块以完成拼图',
    ],
    es: [
      'Arrastra el deslizador para completar el rompecabezas',
      'Arrastra la pieza del rompecabezas para completarlo',
      'Arrastra el deslizador',
      'Arrastra la pieza del rompecabezas',
      'Desliza la pieza del rompecabezas para completarlo',
      'Desliza el deslizador para completar el rompecabezas',
      'Mueve la pieza del rompecabezas para completarlo',
    ],
    hi: [
      'पहेली को पूरा करने के लिए स्लाइडर खींचें',
      'पहेली को पूरा करने के लिए पहेली का टुकड़ा खींचें',
      'स्लाइडर खींचें',
      'पहेली का टुकड़ा खींचें',
      'पहेली को पूरा करने के लिए पहेली का टुकड़ा स्लाइड करें',
      'पहेली को पूरा करने के लिए स्लाइडर स्लाइड करें',
      'पहेली को पूरा करने के लिए पहेली का टुकड़ा हटाएं',
    ],
    ar: [
      'اسحب المنزلق لإكمال اللغز',
      'اسحب قطعة اللغز لإكماله',
      'اسحب المنزلق',
      'اسحب قطعة اللغز',
      'اسحب قطعة اللغز لإكمال اللغز',
      'اسحب المنزلق لإكمال اللغز',
      'حرك قطعة اللغز لإكمال اللغز',
    ],
    pt: [
      'Arraste o controle deslizante para completar o quebra-cabeça',
      'Arraste o controle deslizante',
      'Arraste a peça do quebra-cabeça',
      'Deslize a peça do quebra-cabeça para completá-lo',
      'Deslize o controle deslizante para completar o quebra-cabeça',
      'Mova a peça do quebra-cabeça para completá-lo',
    ],
    bn: [
      'পাজল সম্পন্ন করতে স্লাইডার টেনে আনুন',
      'পাজল সম্পন্ন করতে পাজলের টুকরা টেনে আনুন',
      'স্লাইডার টেনে আনুন',
      'পাজলের টুকরা টেনে আনুন',
      'পাজল সম্পন্ন করতে পাজলের টুকরা স্লাইড করুন',
      'পাজল সম্পন্ন করতে স্লাইডার স্লাইড করুন',
      'পাজল সম্পন্ন করতে পাজলের টুকরা সরিয়ে নিন',
    ],
    ru: [
      'Перетащите ползунок, чтобы завершить пазл',
      'Перетащите кусок пазла, чтобы завершить его',
      'Перетащите ползунок',
      'Перетащите кусок пазла',
      'Проведите кусок пазла, чтобы завершить его',
      'Проведите ползунок, чтобы завершить пазл',
      'Переместите кусок пазла, чтобы завершить его',
    ],
    ja: [
      'パズルを完成させるためにスライダーをドラッグしてください',
      'パズルを完成させるためにパズルのピースをドラッグしてください',
      'スライダーをドラッグしてください',
      'パズルのピースをドラッグしてください',
      'パズルを完成させるためにパズルのピースをスライドしてください',
      'パズルを完成させるためにスライダーをスライドしてください',
      'パズルを完成させるためにパズルのピースを動かしてください',
    ],
    pa: [
      'ਪਜ਼ਲ ਪੂਰੀ ਕਰਨ ਲਈ ਸਲਾਈਡਰ ਖਿੱਚੋ',
      'ਪਜ਼ਲ ਪੂਰੀ ਕਰਨ ਲਈ ਪਜ਼ਲ ਦਾ ਟੁਕੜਾ ਖਿੱਚੋ',
      'ਸਲਾਈਡਰ ਖਿੱਚੋ',
      'ਪਜ਼ਲ ਦਾ ਟੁਕੜਾ ਖਿੱਚੋ',
      'ਪਜ਼ਲ ਪੂਰੀ ਕਰਨ ਲਈ ਪਜ਼ਲ ਦਾ ਟੁਕੜਾ ਸਲਾਈਡ ਕਰੋ',
      'ਪਜ਼ਲ ਪੂਰੀ ਕਰਨ ਲਈ ਸਲਾਈਡਰ ਸਲਾਈਡ ਕਰੋ',
      'ਪਜ਼ਲ ਪੂਰੀ ਕਰਨ ਲਈ ਪਜ਼ਲ ਦਾ ਟੁਕੜਾ ਮੂਵ ਕਰੋ',
    ],
    de: [
      'Ziehen Sie den Schieberegler, um das Puzzle zu vervollständigen',
      'Ziehen Sie das Puzzleteil, um das Puzzle zu vervollständigen',
      'Ziehen Sie den Schieberegler',
      'Ziehen Sie das Puzzleteil',
      'Schieben Sie das Puzzleteil, um das Puzzle zu vervollständigen',
      'Schieben Sie den Schieberegler, um das Puzzle zu vervollständigen',
      'Bewegen Sie das Puzzleteil, um das Puzzle zu vervollständigen',
    ],
    fr: [
      'Faites glisser le curseur pour compléter le puzzle',
      'Faites glisser la pièce du puzzle pour la compléter',
      'Faites glisser le curseur',
      'Faites glisser la pièce du puzzle',
      'Faites glisser la pièce du puzzle pour compléter le puzzle',
      'Faites glisser le curseur pour compléter le puzzle',
      'Déplacez la pièce du puzzle pour la compléter',
    ],
    it: [
      'Trascina il cursore per completare il puzzle',
      'Trascina il pezzo del puzzle per completarlo',
      'Trascina il cursore',
      'Trascina il pezzo del puzzle',
      'Scorri il pezzo del puzzle per completarlo',
      'Scorri il cursore per completare il puzzle',
      'Muovi il pezzo del puzzle per completarlo',
    ],
    id: [
      'Seret penggeser untuk menyelesaikan teka-teki',
      'Seret potongan teka-teki untuk menyelesaikannya',
      'Seret penggeser',
      'Seret potongan teka-teki',
      'Geser potongan teka-teki untuk menyelesaikan teka-teki',
      'Geser penggeser untuk menyelesaikan teka-teki',
      'Pindahkan potongan teka-teki untuk menyelesaikan teka-teki',
    ],
    tr: [
      'Bulmacayı tamamlamak için kaydırıcıyı sürükleyin',
      'Bulmacayı tamamlamak için bulmaca parçasını sürükleyin',
      'Kaydırıcıyı sürükleyin',
      'Bulmaca parçasını sürükleyin',
      'Bulmacayı tamamlamak için bulmaca parçasını kaydırın',
      'Bulmacayı tamamlamak için kaydırıcıyı kaydırın',
      'Bulmacayı tamamlamak için bulmaca parçasını taşıyın',
    ],
    sq: [
      'Tërhiq shiritin për të përfunduar pazllin',
      'Tërhiq pjesën e pazllit për ta përfunduar',
      'Tërhiq shiritin',
      'Tërhiq pjesën e pazllit',
      'Lëviz pjesën e pazllit për ta përfunduar',
      'Lëviz shiritin për të përfunduar pazllin',
      'Zhvendëso pjesën e pazllit për të përfunduar pazllin',
    ],
  },
};

for (const [k, v] of Object.entries(i18n)) {
  // filter each lang by unique
  for (const [lang, arr] of Object.entries(v)) {
    // @ts-ignore
    v[lang] = arr.filter((v, i, a) => a.indexOf(v) === i);
  }
}
