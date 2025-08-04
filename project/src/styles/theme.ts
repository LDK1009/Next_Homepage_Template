import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
    secondaryVariable: {
      [key: string]: {
        dark: string;
        main: string;
        light: string;
      };
    };
  }

  interface PaletteOptions {
    black?: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
    secondaryVariable: {
      [key: string]: {
        dark: string;
        main: string;
        light: string;
        contrastText: string;
      };
    };
  }

  // 배경색 타입 정의
  interface TypeBackground {
    default: string;
    paper: string;
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
  }

  interface TypeText {
    white: string;
    black: string;
  }
}

// 서비스에 어울리는 색상 팔레트
export const muiTheme = createTheme({
  typography: {
    fontFamily: ['"Pretendard-Regular"', '"Malgun Gothic"', '"Apple SD Gothic Neo"', "sans-serif"].join(","),
    // 폰트 사이즈별 설정
    h1: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "0.75rem",
    },
  },
  palette: {
    primary: {
      dark: "#1565C0", // 딥 블루
      main: "#0A84FF", // 대표 앱블루 (iOS/인스타/페이스북 공통)
      light: "#90CAF9", // 연한 블루
    },
    secondary: {
      dark: "#FF4081", // 선명한 핑크 (Z세대 감성)
      main: "#FF80AB", // 캔디 핑크
      light: "#F8BBD0", // 파스텔 핑크
    },

    secondaryVariable: {
      blue: {
        dark: "#0A2FCC",
        main: "#0D45FF",
        light: "#567AFF",
        contrastText: "#FFFFFF",
      },
      green: {
        dark: "#00A650",
        main: "#00FF84",
        light: "#66FFC2",
        contrastText: "#000000",
      },
      yellow: {
        dark: "#C4A000",
        main: "#FFD335",
        light: "#FFE97F",
        contrastText: "#000000",
      },
      pink: {
        dark: "#D6006B",
        main: "#FF2D95",
        light: "#FF7DC2",
        contrastText: "#000000",
      },
      purple: {
        dark: "#7E57C2",
        main: "#B388FF",
        light: "#E0CFFF",
        contrastText: "#000000",
      },
    },

    error: {
      main: "#F44336",
    },

    warning: {
      main: "#FF9800",
    },

    info: {
      main: "#2196F3",
    },

    success: {
      main: "#4CAF50",
    },

    black: {
      0: "#ffffff",
      100: "#CCCCCC",
      200: "#AAAAAA",
      300: "#888888",
      400: "#666666",
      500: "#444444",
      600: "#222222",
      700: "#000000",
    },
    background: {
      default: "#F9FAFB", // 모던 연회색 배경
      paper: "#FFFFFF", // 카드/컴포넌트 배경
      0: "#ffffff",
      100: "#CCCCCC",
      200: "#AAAAAA",
      300: "#888888",
      400: "#666666",
      500: "#444444",
      600: "#222222",
      700: "#000000",
    },

    text: {
      primary: "#000000",
      secondary: "#777777",
      disabled: "#AAAAAA",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.text.secondary,
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
        }),
      },
    },
  },
});
