import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  await prisma.users.createMany({
    data: [
      { email: 'emiliano@test.com', accountnumber: '10005' },
      { email: 'jose@test.com', accountnumber: '10006' },
      { email: 'francisco@test.com', accountnumber: '10007' },
      { email: 'juan@test.com', accountnumber: '10008' },
    ],
  });

  await prisma.instruments.createMany({
    data: [
      { ticker: 'DYCA', name: 'Dycasa S.A.', type: 'ACCIONES' },
      { ticker: 'CAPX', name: 'Capex S.A.', type: 'ACCIONES' },
      { ticker: 'PGR', name: 'Phoenix Global Resources', type: 'ACCIONES' },
      { ticker: 'MOLA', name: 'Molinos Agro S.A.', type: 'ACCIONES' },
      { ticker: 'MIRG', name: 'Mirgor', type: 'ACCIONES' },
      { ticker: 'PATA', name: 'Importadora y Exportadora de la Patagonia', type: 'ACCIONES' },
      { ticker: 'TECO2', name: 'Telecom', type: 'ACCIONES' },
      { ticker: 'FERR', name: 'Ferrum S.A.', type: 'ACCIONES' },
      { ticker: 'SAMI', name: 'S.A San Miguel', type: 'ACCIONES' },
      { ticker: 'IRCP', name: 'IRSA Propiedades Comerciales S.A.', type: 'ACCIONES' },
    ],
  });
  await prisma.instruments.createMany({
    data: [
      { ticker: 'GAMI', name: 'Boldt Gaming S.A.', type: 'ACCIONES' },
      { ticker: 'DOME', name: 'Domec', type: 'ACCIONES' },
      { ticker: 'INTR', name: 'Compañía Introductora de Buenos Aires S.A.', type: 'ACCIONES' },
      { ticker: 'MTR', name: 'Matba Rofex S.A.', type: 'ACCIONES' },
      { ticker: 'FIPL', name: 'Fiplasto', type: 'ACCIONES' },
      { ticker: 'GARO', name: 'Garovaglio Y Zorraquín', type: 'ACCIONES' },
      { ticker: 'SEMI', name: 'Molinos Juan Semino', type: 'ACCIONES' },
      { ticker: 'HARG', name: 'Holcim (Argentina) S.A.', type: 'ACCIONES' },
      { ticker: 'BPAN', name: 'Banco Patagonia', type: 'ACCIONES' },
      { ticker: 'RIGO', name: 'Rigolleau S.A.', type: 'ACCIONES' },
    ],
  });
  await prisma.instruments.createMany({
    data: [
      { ticker: 'CVH', name: 'Cablevision Holding', type: 'ACCIONES' },
      { ticker: 'BBAR', name: 'Banco Frances', type: 'ACCIONES' },
      { ticker: 'LEDE', name: 'Ledesma', type: 'ACCIONES' },
      { ticker: 'CELU', name: 'Celulosa Argentina S.A.', type: 'ACCIONES' },
      { ticker: 'CECO2', name: 'Central Costanera', type: 'ACCIONES' },
      { ticker: 'AGRO', name: 'Agrometal', type: 'ACCIONES' },
      { ticker: 'AUSO', name: 'Autopistas del Sol', type: 'ACCIONES' },
      { ticker: 'BHIP', name: 'Banco Hipotecario S.A.', type: 'ACCIONES' },
      { ticker: 'BMA', name: 'Banco Macro S.A.', type: 'ACCIONES' },
      { ticker: 'CRES', name: 'Cresud S.A.', type: 'ACCIONES' },
    ],
  });
  await prisma.instruments.createMany({
    data: [
      { ticker: 'EDN', name: 'Edenor S.A.', type: 'ACCIONES' },
      { ticker: 'GGAL', name: 'Grupo Financiero Galicia', type: 'ACCIONES' },
      { ticker: 'DGCU2', name: 'Distribuidora De Gas Cuyano S.A.', type: 'ACCIONES' },
      { ticker: 'GBAN', name: 'Gas Natural Ban S.A.', type: 'ACCIONES' },
      { ticker: 'CGPA2', name: 'Camuzzi Gas del Sur', type: 'ACCIONES' },
      { ticker: 'CADO', name: 'Carlos Casado', type: 'ACCIONES' },
      { ticker: 'GCLA', name: 'Grupo Clarin S.A.', type: 'ACCIONES' },
      { ticker: 'RICH', name: 'Laboratorios Richmond', type: 'ACCIONES' },
      { ticker: 'MOLI', name: 'Molinos Río de la Plata', type: 'ACCIONES' },
      { ticker: 'VALO', name: 'BCO DE VALORES ACCIONES ORD.', type: 'ACCIONES' },
    ],
  });
  await prisma.instruments.createMany({
    data: [
      { ticker: 'TGNO4', name: 'Transportadora de Gas del Norte', type: 'ACCIONES' },
      { ticker: 'LOMA', name: 'Loma Negra S.A.', type: 'ACCIONES' },
      { ticker: 'IRSA', name: 'IRSA Inversiones y Representaciones S.A.', type: 'ACCIONES' },
      { ticker: 'PAMP', name: 'Pampa Holding S.A.', type: 'ACCIONES' },
      { ticker: 'TGSU2', name: 'Transportadora de Gas del Sur', type: 'ACCIONES' },
      { ticker: 'TXAR', name: 'Ternium Argentina S.A', type: 'ACCIONES' },
      { ticker: 'YPFD', name: 'Y.P.F. S.A.', type: 'ACCIONES' },
      { ticker: 'MORI', name: 'Morixe Hermanos S.A.C.I.', type: 'ACCIONES' },
      { ticker: 'INVJ', name: 'Inversora Juramento S.A.', type: 'ACCIONES' },
      { ticker: 'POLL', name: 'Polledo S.A.', type: 'ACCIONES' },
    ],
  });
  await prisma.instruments.createMany({
    data: [
      { ticker: 'METR', name: 'MetroGAS S.A.', type: 'ACCIONES' },
      { ticker: 'LONG', name: 'Longvie', type: 'ACCIONES' },
      { ticker: 'SUPV', name: 'Grupo Supervielle S.A.', type: 'ACCIONES' },
      { ticker: 'ROSE', name: 'Instituto Rosenbusch', type: 'ACCIONES' },
      { ticker: 'OEST', name: 'Oeste Grupo Concesionario', type: 'ACCIONES' },
      { ticker: 'COME', name: 'Sociedad Comercial Del Plata', type: 'ACCIONES' },
      { ticker: 'ALUA', name: 'Aluar Aluminio Argentino S.A.I.C.', type: 'ACCIONES' },
      { ticker: 'CTIO', name: 'Consultatio S.A.', type: 'ACCIONES' },
      { ticker: 'TRAN', name: 'Transener S.A.', type: 'ACCIONES' },
      { ticker: 'HAVA', name: 'Havanna Holding', type: 'ACCIONES' },
      { ticker: 'BYMA', name: 'Bolsas y Mercados Argentinos S.A.', type: 'ACCIONES' },
      { ticker: 'ARS', name: 'PESOS', type: 'MONEDA' },
      { ticker: 'GRIM', name: 'Grimoldi', type: 'ACCIONES' },
      { ticker: 'CEPU', name: 'Central Puerto', type: 'ACCIONES'},
      { ticker: 'CARC', name: 'Carboclor S.A.', type: 'ACCIONES'},
      { ticker: 'BOLT', name: 'Boldt S.A.', type: 'ACCIONES'},

    ],
  });

  await prisma.marketdata.createMany({
    data: [
      { instrumentid: 12, date: new Date('2023-07-13'), open: null, high: null, low: null, close: 20.5, previousclose: 20.5 },
      { instrumentid: 35, date: new Date('2023-07-13'), open: 337.5, high: 342.5, low: 328.5, close: 341.5, previousclose: 335.0 },
      { instrumentid: 54, date: new Date('2023-07-13'), open: 232.0, high: 232.0, low: 222.5, close: 232.0, previousclose: 229.0 },
      { instrumentid: 51, date: new Date('2023-07-13'), open: 35.9, high: 36.55, low: 35.75, close: 35.95, previousclose: 35.9 },
      { instrumentid: 52, date: new Date('2023-07-13'), open: 105.0, high: 105.0, low: 98.5, close: 99.7, previousclose: 103.0 },
      { instrumentid: 60, date: new Date('2023-07-13'), open: 358.0, high: 365.95, low: 354.45, close: 364.8, previousclose: 353.45 },
      { instrumentid: 31, date: new Date('2023-07-13'), open: 1425.0, high: 1541.0, low: 1415.0, close: 1520.25, previousclose: 1413.5 },
      { instrumentid: 40, date: new Date('2023-07-13'), open: 400.0, high: 400.0, low: 395.0, close: 397.5, previousclose: 400.0 },
      { instrumentid: 4, date: new Date('2023-07-13'), open: 6940.0, high: 7044.0, low: 6561.0, close: 6621.5, previousclose: 6659.5 },
      { instrumentid: 37, date: new Date('2023-07-13'), open: 407.0, high: 409.0, low: 388.5, close: 400.5, previousclose: 408.0 },
      { instrumentid: 44, date: new Date('2023-07-13'), open: 668.0, high: 669.5, low: 655.0, close: 668.0, previousclose: 658.0 },
      { instrumentid: 63, date: new Date('2023-07-13'), open: 367.5, high: 378.0, low: 366.0, close: 373.0, previousclose: 367.5 },
      { instrumentid: 18, date: new Date('2023-07-13'), open: 500.0, high: 525.0, low: 494.0, close: 515.5, previousclose: 498.0 },
      { instrumentid: 30, date: new Date('2023-07-13'), open: 6.7, high: 6.8, low: 6.66, close: 6.75, previousclose: 6.64 },
      { instrumentid: 25, date: new Date('2023-07-13'), open: 188.0, high: 195.0, low: 187.0, close: 192.75, previousclose: 187.5 },
      { instrumentid: 19, date: new Date('2023-07-13'), open: 273.0, high: 295.0, low: 266.0, close: 289.0, previousclose: 273.0 },
      { instrumentid: 6, date: new Date('2023-07-13'), open: 245.0, high: 256.0, low: 241.25, close: 251.5, previousclose: 247.25 },
      { instrumentid: 11, date: new Date('2023-07-13'), open: 86.5, high: 86.5, low: 84.0, close: 86.0, previousclose: 86.4 },
      { instrumentid: 17, date: new Date('2023-07-13'), open: 53.0, high: 54.0, low: 51.5, close: 53.2, previousclose: 52.0 },
    ],
  });
  await prisma.marketdata.createMany({
    data: [
      { instrumentid: 64, date: new Date('2023-07-13'), open: 1107.0, high: 1170.0, low: 1107.0, close: 1163.0, previousclose: 1122.0 },
      { instrumentid: 21, date: new Date('2023-07-13'), open: 1567.0, high: 1660.0, low: 1562.0, close: 1656.0, previousclose: 1562.0 },
      { instrumentid: 23, date: new Date('2023-07-13'), open: 307.0, high: 348.0, low: 298.0, close: 337.0, previousclose: 304.0 },
      { instrumentid: 39, date: new Date('2023-07-13'), open: 450.0, high: 460.0, low: 433.0, close: 449.65, previousclose: 447.75 },
      { instrumentid: 1, date: new Date('2023-07-13'), open: 268.0, high: 268.0, low: 255.0, close: 260.0, previousclose: 264.0 },
      { instrumentid: 8, date: new Date('2023-07-13'), open: 38.15, high: 38.5, low: 37.0, close: 37.55, previousclose: 38.15 },
      { instrumentid: 58, date: new Date('2023-07-13'), open: 217.0, high: 220.5, low: 217.0, close: 220.0, previousclose: 217.5 },
      { instrumentid: 14, date: new Date('2023-07-13'), open: 617.0, high: 617.0, low: 612.5, close: 615.0, previousclose: 612.5 },
      { instrumentid: 2, date: new Date('2023-07-13'), open: 1850.0, high: 1930.0, low: 1850.0, close: 1918.0, previousclose: 1885.5 },
      { instrumentid: 29, date: new Date('2023-07-13'), open: 8.8, high: 8.9, low: 8.72, close: 8.79, previousclose: 8.76 },
      { instrumentid: 36, date: new Date('2023-07-13'), open: 330.0, high: 330.0, low: 311.0, close: 323.0, previousclose: 325.0 },
      { instrumentid: 27, date: new Date('2023-07-13'), open: 640.0, high: 640.0, low: 615.0, close: 623.0, previousclose: 631.5 },
      { instrumentid: 62, date: new Date('2023-07-13'), open: 535.0, high: 535.0, low: 495.0, close: 519.0, previousclose: 530.0 },
      { instrumentid: 15, date: new Date('2023-07-13'), open: 64.0, high: 66.0, low: 64.0, close: 66.0, previousclose: 65.0 },
      { instrumentid: 13, date: new Date('2023-07-13'), open: 75.0, high: 75.0, low: 75.0, close: 75.0, previousclose: 72.3 },
      { instrumentid: 26, date: new Date('2023-07-13'), open: 134.25, high: 140.0, low: 132.0, close: 138.0, previousclose: 136.75 },
      { instrumentid: 24, date: new Date('2023-07-13'), open: 309.0, high: 313.5, low: 302.0, close: 310.0, previousclose: 306.5 },
      { instrumentid: 32, date: new Date('2023-07-13'), open: 415.0, high: 430.0, low: 408.3, close: 429.45, previousclose: 405.1 },
      { instrumentid: 22, date: new Date('2023-07-13'), open: 1039.0, high: 1076.9, low: 1031.0, close: 1062.2, previousclose: 1020.9 },
      { instrumentid: 57, date: new Date('2023-07-13'), open: 21.4, high: 21.4, low: 21.4, close: 21.4, previousclose: 21.4 },
      { instrumentid: 9, date: new Date('2023-07-13'), open: 313.0, high: 315.0, low: 305.0, close: 310.0, previousclose: 313.0 },
      { instrumentid: 65, date: new Date('2023-07-13'), open: 363.5, high: 368.0, low: 360.0, close: 362.0, previousclose: 360.0 },
      { instrumentid: 59, date: new Date('2023-07-13'), open: 40.45, high: 43.2, low: 40.2, close: 42.9, previousclose: 39.9 },
    ],
  });
  await prisma.marketdata.createMany({
    data: [
      { instrumentid: 41, date: new Date('2023-07-13'), open: 508.5, high: 546.0, low: 502.0, close: 543.0, previousclose: 500.5 },
      { instrumentid: 38, date: new Date('2023-07-13'), open: 162.25, high: 163.5, low: 160.0, close: 163.25, previousclose: 162.0 },
      { instrumentid: 5, date: new Date('2023-07-13'), open: 9150.0, high: 9297.5, low: 9121.0, close: 9278.0, previousclose: 9114.0 },
      { instrumentid: 61, date: new Date('2023-07-13'), open: 391.0, high: 412.0, low: 391.0, close: 412.0, previousclose: 391.0 },
      { instrumentid: 55, date: new Date('2023-07-13'), open: 18.9, high: 19.4, low: 18.7, close: 19.05, previousclose: 19.0 },
      { instrumentid: 42, date: new Date('2023-07-13'), open: 663.0, high: 682.0, low: 646.0, close: 657.5, previousclose: 661.5 },
      { instrumentid: 20, date: new Date('2023-07-13'), open: 540.0, high: 565.0, low: 540.0, close: 565.0, previousclose: 580.0 },
      { instrumentid: 34, date: new Date('2023-07-13'), open: 875.0, high: 925.85, low: 875.0, close: 917.75, previousclose: 864.9 },
      { instrumentid: 46, date: new Date('2023-07-13'), open: 428.35, high: 439.0, low: 421.0, close: 431.9, previousclose: 428.6 },
      { instrumentid: 45, date: new Date('2023-07-13'), open: 701.8, high: 746.0, low: 701.8, close: 734.35, previousclose: 696.6 },
      { instrumentid: 47, date: new Date('2023-07-13'), open: 900.0, high: 924.6, low: 896.0, close: 921.8, previousclose: 893.65 },
      { instrumentid: 56, date: new Date('2023-07-13'), open: 311.6, high: 340.25, low: 311.6, close: 338.85, previousclose: 311.6 },
      { instrumentid: 7, date: new Date('2023-07-13'), open: 670.0, high: 684.5, low: 665.7, close: 672.65, previousclose: 664.25 },
      { instrumentid: 48, date: new Date('2023-07-13'), open: 1410.5, high: 1440.0, low: 1403.65, close: 1437.55, previousclose: 1394.2 },
      { instrumentid: 49, date: new Date('2023-07-13'), open: 428.0, high: 458.0, low: 425.5, close: 448.0, previousclose: 428.0 },
      { instrumentid: 43, date: new Date('2023-07-13'), open: 107.0, high: 110.0, low: 106.0, close: 108.5, previousclose: 106.5 },
      { instrumentid: 50, date: new Date('2023-07-13'), open: 7746.55, high: 8035.0, low: 7746.55, close: 7975.05, previousclose: 7673.65 },
      { instrumentid: 16, date: new Date('2023-07-13'), open: 56.0, high: 58.5, low: 56.0, close: 56.1, previousclose: 56.0 },
      { instrumentid: 53, date: new Date('2023-07-13'), open: null, high: null, low: null, close: 62.0, previousclose: 62.0 },
      { instrumentid: 28, date: new Date('2023-07-13'), open: 33.0, high: 35.0, low: 31.9, close: 34.6, previousclose: 33.15 },
      { instrumentid: 33, date: new Date('2023-07-13'), open: 394.0, high: 421.3, low: 382.0, close: 418.5, previousclose: 381.65 },
    ],
  });
  await prisma.marketdata.createMany({
        data: [
      { instrumentid: 62, date: new Date('2023-07-14'), open: 520.0, high: 523.0, low: 510.0, close: 520.0, previousclose: 519.0 },
      { instrumentid: 12, date: new Date('2023-07-14'), open: 20.5, high: 20.5, low: 20.5, close: 20.5, previousclose: 20.5 },
      { instrumentid: 42, date: new Date('2023-07-14'), open: 657.5, high: 669.0, low: 638.0, close: 648.5, previousclose: 657.5 },
      { instrumentid: 35, date: new Date('2023-07-14'), open: 336.0, high: 340.0, low: 333.0, close: 338.0, previousclose: 341.5 },
      { instrumentid: 15, date: new Date('2023-07-14'), open: 69.0, high: 93.0, low: 68.5, close: 88.7, previousclose: 66.0 },
      { instrumentid: 54, date: new Date('2023-07-14'), open: 232.0, high: 233.0, low: 225.25, close: 229.5, previousclose: 232.0 },
      { instrumentid: 48, date: new Date('2023-07-14'), open: 1434.05, high: 1435.55, low: 1380.0, close: 1397.7, previousclose: 1437.55 },
      { instrumentid: 51, date: new Date('2023-07-14'), open: 35.8, high: 36.7, low: 34.6, close: 36.0, previousclose: 35.95 },
      { instrumentid: 13, date: new Date('2023-07-14'), open: 74.9, high: 77.0, low: 74.8, close: 77.0, previousclose: 75.0 },
      { instrumentid: 52, date: new Date('2023-07-14'), open: 101.0, high: 103.0, low: 98.0, close: 102.0, previousclose: 99.7 },
      { instrumentid: 20, date: new Date('2023-07-14'), open: 565.0, high: 565.0, low: 565.0, close: 565.0, previousclose: 565.0 },
      { instrumentid: 60, date: new Date('2023-07-14'), open: 369.65, high: 369.65, low: 356.25, close: 363.0, previousclose: 364.8 },
      { instrumentid: 26, date: new Date('2023-07-14'), open: 138.0, high: 140.0, low: 134.25, close: 138.0, previousclose: 138.0 },
      { instrumentid: 31, date: new Date('2023-07-14'), open: 1525.0, high: 1560.0, low: 1470.0, close: 1502.8, previousclose: 1520.25 },
      { instrumentid: 16, date: new Date('2023-07-14'), open: 55.0, high: 57.0, low: 55.0, close: 56.1, previousclose: 56.1 },
      { instrumentid: 40, date: new Date('2023-07-14'), open: 395.0, high: 395.0, low: 390.0, close: 392.5, previousclose: 397.5 },
      { instrumentid: 24, date: new Date('2023-07-14'), open: 295.0, high: 322.5, low: 295.0, close: 322.0, previousclose: 310.0 },
        ]
  });
  await prisma.marketdata.createMany({
    data: [ 
      { instrumentid: 4, date: new Date('2023-07-14'), open: 6650.0, high: 6840.0, low: 6500.0, close: 6640.0, previousclose: 6621.5 },
      { instrumentid: 34, date: new Date('2023-07-14'), open: 915.8, high: 918.9, low: 870.0, close: 885.8, previousclose: 917.75 },
      { instrumentid: 37, date: new Date('2023-07-14'), open: 390.0, high: 412.0, low: 388.0, close: 400.5, previousclose: 400.5 },
      { instrumentid: 32, date: new Date('2023-07-14'), open: 421.5, high: 429.5, low: 410.0, close: 424.25, previousclose: 429.45 },
      { instrumentid: 44, date: new Date('2023-07-14'), open: 668.0, high: 668.5, low: 640.5, close: 650.0, previousclose: 668.0 },
      { instrumentid: 49, date: new Date('2023-07-14'), open: 455.0, high: 455.0, low: 426.0, close: 429.0, previousclose: 448.0 },
      { instrumentid: 63, date: new Date('2023-07-14'), open: 373.0, high: 373.0, low: 360.0, close: 369.5, previousclose: 373.0 },
      { instrumentid: 22, date: new Date('2023-07-14'), open: 1047.0, high: 1062.0, low: 1002.0, close: 1038.1, previousclose: 1047.166 },
      { instrumentid: 18, date: new Date('2023-07-14'), open: 515.0, high: 516.0, low: 500.5, close: 505.5, previousclose: 515.5 },
      { instrumentid: 46, date: new Date('2023-07-14'), open: 431.8, high: 431.8, low: 419.3, close: 420.1, previousclose: 431.9 },
      { instrumentid: 30, date: new Date('2023-07-14'), open: 6.8, high: 7.02, low: 6.8, close: 7.0, previousclose: 6.75 },
      { instrumentid: 57, date: new Date('2023-07-14'), open: 21.4, high: 21.4, low: 21.4, close: 21.4, previousclose: 21.4 },
      { instrumentid: 25, date: new Date('2023-07-14'), open: 190.0, high: 196.0, low: 189.0, close: 195.0, previousclose: 192.75 },
      { instrumentid: 28, date: new Date('2023-07-14'), open: 35.4, high: 35.5, low: 32.6, close: 33.4, previousclose: 34.6 },
      { instrumentid: 19, date: new Date('2023-07-14'), open: 291.0, high: 291.0, low: 275.0, close: 279.0, previousclose: 289.0 },
      { instrumentid: 9, date: new Date('2023-07-14'), open: 312.0, high: 317.0, low: 305.5, close: 309.5, previousclose: 310.0 },
      { instrumentid: 6, date: new Date('2023-07-14'), open: 252.5, high: 257.0, low: 244.0, close: 251.0, previousclose: 251.5 },
      { instrumentid: 45, date: new Date('2023-07-14'), open: 730.0, high: 744.45, low: 724.0, close: 734.65, previousclose: 734.35 },
      { instrumentid: 11, date: new Date('2023-07-14'), open: 86.9, high: 86.9, low: 84.0, close: 84.3, previousclose: 86.0 },
      { instrumentid: 65, date: new Date('2023-07-14'), open: 363.0, high: 370.5, low: 361.0, close: 369.5, previousclose: 362.0 },
      { instrumentid: 17, date: new Date('2023-07-14'), open: 53.5, high: 58.0, low: 53.0, close: 57.2, previousclose: 53.2 },
      { instrumentid: 43, date: new Date('2023-07-14'), open: 106.5, high: 110.0, low: 106.0, close: 107.5, previousclose: 108.5 },
      { instrumentid: 64, date: new Date('2023-07-14'), open: 1170.0, high: 1190.0, low: 1150.0, close: 1180.0, previousclose: 1163.0 },
      { instrumentid: 59, date: new Date('2023-07-14'), open: 43.0, high: 43.3, low: 41.75, close: 42.75, previousclose: 42.9 },
    ],
  });

  await prisma.marketdata.createMany({
        data: [
      { instrumentid: 21, date: new Date('2023-07-14'), open: 1659.5, high: 1680.0, low: 1580.0, close: 1660.0, previousclose: 1656.0 },
      { instrumentid: 47, date: new Date('2023-07-14'), open: 920.15, high: 927.7, low: 902.05, close: 925.85, previousclose: 921.8 },
      { instrumentid: 23, date: new Date('2023-07-14'), open: 338.5, high: 350.0, low: 320.0, close: 341.5, previousclose: 337.0 },
      { instrumentid: 41, date: new Date('2023-07-14'), open: 546.0, high: 579.0, low: 525.0, close: 550.0, previousclose: 543.0 },
      { instrumentid: 39, date: new Date('2023-07-14'), open: 455.0, high: 455.0, low: 437.0, close: 450.6, previousclose: 449.65 },
      { instrumentid: 53, date: new Date('2023-07-14'), open: 60.0, high: 60.0, low: 60.0, close: 60.0, previousclose: 62.0 },
      { instrumentid: 1, date: new Date('2023-07-14'), open: 260.0, high: 278.0, low: 240.0, close: 259.0, previousclose: 260.0 },
      { instrumentid: 38, date: new Date('2023-07-14'), open: 165.0, high: 167.0, low: 161.5, close: 166.5, previousclose: 163.25 },
      { instrumentid: 8, date: new Date('2023-07-14'), open: 38.8, high: 39.0, low: 37.8, close: 38.8, previousclose: 37.55 },
      { instrumentid: 56, date: new Date('2023-07-14'), open: 335.15, high: 335.55, low: 322.0, close: 328.1, previousclose: 338.85 },
      { instrumentid: 58, date: new Date('2023-07-14'), open: 219.5, high: 220.25, low: 214.0, close: 220.25, previousclose: 220.0 },
      { instrumentid: 5, date: new Date('2023-07-14'), open: 9299.5, high: 9299.5, low: 8899.5, close: 9163.0, previousclose: 9278.0 },
      { instrumentid: 14, date: new Date('2023-07-14'), open: 615.0, high: 615.0, low: 614.5, close: 615.0, previousclose: 615.0 },
      { instrumentid: 50, date: new Date('2023-07-14'), open: 7901.25, high: 7901.25, low: 7752.0, close: 7837.5, previousclose: 7975.05 },
      { instrumentid: 2, date: new Date('2023-07-14'), open: 1850.0, high: 1920.0, low: 1850.0, close: 1865.0, previousclose: 1918.0 },
      { instrumentid: 61, date: new Date('2023-07-14'), open: 411.5, high: 413.0, low: 395.0, close: 410.0, previousclose: 412.0 },
      { instrumentid: 29, date: new Date('2023-07-14'), open: 8.84, high: 8.94, low: 8.8, close: 8.93, previousclose: 8.79 },
      { instrumentid: 7, date: new Date('2023-07-14'), open: 674.0, high: 675.0, low: 647.0, close: 651.85, previousclose: 672.65 },
      { instrumentid: 36, date: new Date('2023-07-14'), open: 311.0, high: 316.0, low: 311.0, close: 315.0, previousclose: 323.0 },
      { instrumentid: 55, date: new Date('2023-07-14'), open: 19.1, high: 19.3, low: 18.75, close: 19.0, previousclose: 19.05 },
      { instrumentid: 27, date: new Date('2023-07-14'), open: 636.0, high: 636.0, low: 620.0, close: 624.0, previousclose: 623.0 },
      { instrumentid: 33, date: new Date('2023-07-14'), open: 418.0, high: 418.5, low: 407.2, close: 414.7, previousclose: 418.5 }
    ],
  });

  await prisma.orders.createMany({
    data: [
      { instrumentid: 66, userid: 1, size: 1000000, price: 1, side: 'CASH_IN', status: 'FILLED', type: 'MARKET', datetime: new Date('2023-07-12 12:11:20') },
      { instrumentid: 47, userid: 1, size: 50, price: 930, side: 'BUY', status: 'FILLED', type: 'MARKET', datetime: new Date('2023-07-12 12:31:20') },
      { instrumentid: 47, userid: 1, size: 50, price: 920, side: 'BUY', status: 'CANCELLED', type: 'LIMIT', datetime: new Date('2023-07-12 14:21:20') },
      { instrumentid: 47, userid: 1, size: 10, price: 940, side: 'SELL', status: 'FILLED', type: 'MARKET', datetime: new Date('2023-07-12 14:51:20') },
      { instrumentid: 45, userid: 1, size: 50, price: 710, side: 'BUY', status: 'NEW', type: 'LIMIT', datetime: new Date('2023-07-12 15:14:20') },
      { instrumentid: 47, userid: 1, size: 100, price: 950, side: 'SELL', status: 'REJECTED', type: 'MARKET', datetime: new Date('2023-07-12 16:11:20') },
      { instrumentid: 31, userid: 1, size: 60, price: 1500, side: 'BUY', status: 'NEW', type: 'LIMIT', datetime: new Date('2023-07-13 11:13:20') },
      { instrumentid: 66, userid: 1, size: 100000, price: 1, side: 'CASH_OUT', status: 'FILLED', type: 'MARKET', datetime: new Date('2023-07-13 12:31:20') },
      { instrumentid: 31, userid: 1, size: 20, price: 1540, side: 'BUY', status: 'FILLED', type: 'LIMIT', datetime: new Date('2023-07-13 12:51:20') },
      { instrumentid: 54, userid: 1, size: 500, price: 250, side: 'BUY', status: 'FILLED', type: 'MARKET', datetime: new Date('2023-07-13 14:11:20') },
      { instrumentid: 31, userid: 1, size: 30, price: 1530, side: 'SELL', status: 'FILLED', type: 'MARKET', datetime: new Date('2023-07-13 15:13:20') },
    ],
  });
}

main()
  .then(() => {
    console.log('Seeding complete');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
