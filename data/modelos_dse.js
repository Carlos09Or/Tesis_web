// Generado por banco_dse/base/exportar_web.py. No editar a mano: añade el modelo en modelos_web.json y vuelve a generarlo.
window.MODELOS_DSE = {
 "generado": "2026-11-11 21:39",
 "niveles": {
  "A": {
   "n": 1914,
   "ok": 1914,
   "nota": "Herramientas contra el oráculo, sin LLM: no depende del modelo"
  }
 },
 "modelos": [
  {
   "id": "qwen35-9b",
   "nombre": "qwen3.5:9b",
   "tipo": "local",
   "donde": "Ollama local · RTX 3060 Laptop 6 GB",
   "color": "#eb6834",
   "nota": "B y C se midieron con el sistema 9f381827617bdb34 (antes del cambio de la frase de variar); las tareas con variar se repitieron con el sistema actual y dieron 9/9 en B y en C. D dev y test, con el sistema actual dd9fe84426bd4db2.",
   "costo_usd": 0,
   "costo_fuente": "local",
   "costo_nota": "Local: sin costo por token (solo electricidad).",
   "precios_lista_usd_por_millon": null,
   "razonamiento": "apagado (think=false)",
   "num_ctx": "16384",
   "num_predict": "2048",
   "huella_sistema": "dd9fe84426bd4db2",
   "huella_ejecutor": "6f6f0f6c526fc785",
   "huella_banco": "a80b20d62efab9cd",
   "fecha": "2026-11-11",
   "huellas_sistema_por_nivel": {
    "B": "9f381827617bdb34",
    "C": "9f381827617bdb34",
    "Ddev": "dd9fe84426bd4db2",
    "Dtest": "dd9fe84426bd4db2"
   },
   "niveles": {
    "B": {
     "n": 99,
     "ok": 93,
     "seleccion": 97.0,
     "argumentos": 99.0,
     "fidelidad": 99.0,
     "valor": 97.0
    },
    "C": {
     "n": 27,
     "ok": 25
    },
    "Ddev": {
     "n": 45,
     "ok": 34,
     "ok_estricto": 31
    },
    "Dtest": {
     "n": 57,
     "ok": 48,
     "ok_estricto": 48
    }
   },
   "B_por_herramienta": {
    "barrer": [
     8,
     9
    ],
    "variar": [
     9,
     9
    ],
    "frente_pareto": [
     9,
     9
    ],
    "consultar_estado": [
     9,
     9
    ],
    "estimar_baseline": [
     9,
     9
    ],
    "generar_candidato": [
     9,
     9
    ],
    "predecir_recursos": [
     9,
     9
    ],
    "seleccionar_mejor": [
     9,
     9
    ],
    "sugerir_ejemplo_real": [
     6,
     9
    ],
    "verificar_restricciones": [
     7,
     9
    ],
    "verificar_limites_operativos": [
     9,
     9
    ]
   },
   "C_por_cadena": {
    "variar>verificar": [
     9,
     9
    ],
    "barrer>seleccionar": [
     9,
     9
    ],
    "predecir>verificar": [
     7,
     9
    ]
   },
   "dev_por_plantilla": {
    "T2": [
     12,
     12
    ],
    "T3": [
     3,
     3
    ],
    "T4": [
     11,
     12
    ],
    "T5": [
     3,
     12
    ],
    "T8": [
     3,
     3
    ],
    "T10": [
     2,
     3
    ]
   },
   "test_por_plantilla": {
    "T1": [
     9,
     9
    ],
    "T2": [
     5,
     5
    ],
    "T3": [
     8,
     8
    ],
    "T4": [
     5,
     5
    ],
    "T5": [
     2,
     5
    ],
    "T8": [
     5,
     8
    ],
    "T9": [
     9,
     9
    ],
    "T10": [
     5,
     8
    ]
   },
   "test_tareas": {
    "Conv1D-conv1d-C-T1-D2": [
     1,
     2,
     60
    ],
    "Conv1D-conv1d-C-T2-D1": [
     1,
     11,
     216
    ],
    "Conv1D-conv1d-C-T5-D3": [
     0,
     6,
     255
    ],
    "Conv1D-conv1d-PA-RA-T1-D1": [
     1,
     2,
     49
    ],
    "Conv1D-conv1d-PA-RA-T10-D2": [
     0,
     6,
     172
    ],
    "Conv1D-conv1d-PA-RA-T5-D2": [
     0,
     9,
     842
    ],
    "Conv1D-conv1d-PA-RA-T9-D3": [
     1,
     10,
     145
    ],
    "Conv1D-conv1d-PA-RB-T10-D1": [
     1,
     6,
     244
    ],
    "Conv1D-conv1d-PA-RB-T3-D3": [
     1,
     13,
     768
    ],
    "Conv1D-conv1d-PA-RB-T5-D1": [
     1,
     20,
     257
    ],
    "Conv1D-conv1d-PA-RB-T8-D3": [
     1,
     4,
     160
    ],
    "Conv1D-conv1d-PA-RB-T9-D2": [
     1,
     22,
     316
    ],
    "Conv1D-conv1d-PB-RA-T2-D3": [
     1,
     13,
     177
    ],
    "Conv1D-conv1d-PB-RA-T3-D2": [
     1,
     21,
     262
    ],
    "Conv1D-conv1d-PB-RA-T8-D2": [
     0,
     20,
     271
    ],
    "Conv1D-conv1d-PB-RA-T9-D1": [
     1,
     9,
     141
    ],
    "Conv1D-conv1d-PB-RB-T1-D3": [
     1,
     2,
     49
    ],
    "Conv1D-conv1d-PB-RB-T3-D1": [
     1,
     7,
     270
    ],
    "Conv1D-conv1d-PB-RB-T8-D1": [
     1,
     6,
     92
    ],
    "Conv2D-conv2d-C-T1-D1": [
     1,
     2,
     40
    ],
    "Conv2D-conv2d-C-T10-D2": [
     1,
     6,
     290
    ],
    "Conv2D-conv2d-C-T4-D3": [
     1,
     5,
     74
    ],
    "Conv2D-conv2d-C-T9-D3": [
     1,
     22,
     314
    ],
    "Conv2D-conv2d-PA-RA-T10-D1": [
     1,
     6,
     206
    ],
    "Conv2D-conv2d-PA-RA-T3-D3": [
     1,
     19,
     295
    ],
    "Conv2D-conv2d-PA-RA-T5-D1": [
     1,
     14,
     179
    ],
    "Conv2D-conv2d-PA-RA-T8-D3": [
     1,
     17,
     230
    ],
    "Conv2D-conv2d-PA-RA-T9-D2": [
     1,
     22,
     498
    ],
    "Conv2D-conv2d-PA-RB-T3-D2": [
     1,
     13,
     964
    ],
    "Conv2D-conv2d-PA-RB-T4-D1": [
     1,
     6,
     93
    ],
    "Conv2D-conv2d-PA-RB-T8-D2": [
     1,
     8,
     187
    ],
    "Conv2D-conv2d-PA-RB-T9-D1": [
     1,
     12,
     164
    ],
    "Conv2D-conv2d-PB-RA-T1-D3": [
     1,
     2,
     37
    ],
    "Conv2D-conv2d-PB-RA-T3-D1": [
     1,
     13,
     170
    ],
    "Conv2D-conv2d-PB-RA-T8-D1": [
     1,
     5,
     216
    ],
    "Conv2D-conv2d-PB-RB-T1-D2": [
     1,
     2,
     38
    ],
    "Conv2D-conv2d-PB-RB-T10-D3": [
     1,
     6,
     187
    ],
    "Conv2D-conv2d-PB-RB-T5-D3": [
     0,
     4,
     202
    ],
    "Dense-2_20-T1-D1": [
     1,
     2,
     39
    ],
    "Dense-2_20-T10-D2": [
     0,
     8,
     267
    ],
    "Dense-2_20-T4-D3": [
     1,
     2,
     55
    ],
    "Dense-2_20-T9-D3": [
     1,
     14,
     1024
    ],
    "Dense-2layer-T2-D3": [
     1,
     12,
     187
    ],
    "Dense-2layer-T4-D1": [
     1,
     6,
     128
    ],
    "Dense-2layer-T8-D2": [
     0,
     4,
     137
    ],
    "Dense-2layer-T9-D1": [
     1,
     9,
     168
    ],
    "Dense-3layer-T10-D1": [
     0,
     6,
     255
    ],
    "Dense-3layer-T3-D3": [
     1,
     14,
     283
    ],
    "Dense-3layer-T4-D2": [
     1,
     2,
     46
    ],
    "Dense-3layer-T8-D3": [
     0,
     22,
     300
    ],
    "Dense-3layer-T9-D2": [
     1,
     12,
     498
    ],
    "Dense-latency-T1-D2": [
     1,
     2,
     36
    ],
    "Dense-latency-T10-D3": [
     1,
     6,
     186
    ],
    "Dense-latency-T2-D1": [
     1,
     9,
     109
    ],
    "Dense-resource-T1-D3": [
     1,
     2,
     38
    ],
    "Dense-resource-T2-D2": [
     1,
     10,
     158
    ],
    "Dense-resource-T3-D1": [
     1,
     10,
     155
    ]
   },
   "test_plantilla_de_tarea": {
    "Conv1D-conv1d-C-T1-D2": "T1",
    "Conv1D-conv1d-C-T2-D1": "T2",
    "Conv1D-conv1d-C-T5-D3": "T5",
    "Conv1D-conv1d-PA-RA-T1-D1": "T1",
    "Conv1D-conv1d-PA-RA-T10-D2": "T10",
    "Conv1D-conv1d-PA-RA-T5-D2": "T5",
    "Conv1D-conv1d-PA-RA-T9-D3": "T9",
    "Conv1D-conv1d-PA-RB-T10-D1": "T10",
    "Conv1D-conv1d-PA-RB-T3-D3": "T3",
    "Conv1D-conv1d-PA-RB-T5-D1": "T5",
    "Conv1D-conv1d-PA-RB-T8-D3": "T8",
    "Conv1D-conv1d-PA-RB-T9-D2": "T9",
    "Conv1D-conv1d-PB-RA-T2-D3": "T2",
    "Conv1D-conv1d-PB-RA-T3-D2": "T3",
    "Conv1D-conv1d-PB-RA-T8-D2": "T8",
    "Conv1D-conv1d-PB-RA-T9-D1": "T9",
    "Conv1D-conv1d-PB-RB-T1-D3": "T1",
    "Conv1D-conv1d-PB-RB-T3-D1": "T3",
    "Conv1D-conv1d-PB-RB-T8-D1": "T8",
    "Conv2D-conv2d-C-T1-D1": "T1",
    "Conv2D-conv2d-C-T10-D2": "T10",
    "Conv2D-conv2d-C-T4-D3": "T4",
    "Conv2D-conv2d-C-T9-D3": "T9",
    "Conv2D-conv2d-PA-RA-T10-D1": "T10",
    "Conv2D-conv2d-PA-RA-T3-D3": "T3",
    "Conv2D-conv2d-PA-RA-T5-D1": "T5",
    "Conv2D-conv2d-PA-RA-T8-D3": "T8",
    "Conv2D-conv2d-PA-RA-T9-D2": "T9",
    "Conv2D-conv2d-PA-RB-T3-D2": "T3",
    "Conv2D-conv2d-PA-RB-T4-D1": "T4",
    "Conv2D-conv2d-PA-RB-T8-D2": "T8",
    "Conv2D-conv2d-PA-RB-T9-D1": "T9",
    "Conv2D-conv2d-PB-RA-T1-D3": "T1",
    "Conv2D-conv2d-PB-RA-T3-D1": "T3",
    "Conv2D-conv2d-PB-RA-T8-D1": "T8",
    "Conv2D-conv2d-PB-RB-T1-D2": "T1",
    "Conv2D-conv2d-PB-RB-T10-D3": "T10",
    "Conv2D-conv2d-PB-RB-T5-D3": "T5",
    "Dense-2_20-T1-D1": "T1",
    "Dense-2_20-T10-D2": "T10",
    "Dense-2_20-T4-D3": "T4",
    "Dense-2_20-T9-D3": "T9",
    "Dense-2layer-T2-D3": "T2",
    "Dense-2layer-T4-D1": "T4",
    "Dense-2layer-T8-D2": "T8",
    "Dense-2layer-T9-D1": "T9",
    "Dense-3layer-T10-D1": "T10",
    "Dense-3layer-T3-D3": "T3",
    "Dense-3layer-T4-D2": "T4",
    "Dense-3layer-T8-D3": "T8",
    "Dense-3layer-T9-D2": "T9",
    "Dense-latency-T1-D2": "T1",
    "Dense-latency-T10-D3": "T10",
    "Dense-latency-T2-D1": "T2",
    "Dense-resource-T1-D3": "T1",
    "Dense-resource-T2-D2": "T2",
    "Dense-resource-T3-D1": "T3"
   },
   "consumo": {
    "B": {
     "corridas": 99,
     "tokens_entrada": 812099,
     "tokens_salida": 31316,
     "tokens_cacheados": 700570,
     "llamadas": 244,
     "minutos": 67.8,
     "segundos_medios": 41.1,
     "pasos_medios": 1.4,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "C": {
     "corridas": 27,
     "tokens_entrada": 280583,
     "tokens_salida": 10032,
     "tokens_cacheados": 239292,
     "llamadas": 83,
     "minutos": 23.0,
     "segundos_medios": 51.1,
     "pasos_medios": 2.1,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "Ddev": {
     "corridas": 45,
     "tokens_entrada": 1928829,
     "tokens_salida": 84646,
     "tokens_cacheados": 1618702,
     "llamadas": 406,
     "minutos": 186.5,
     "segundos_medios": 248.7,
     "pasos_medios": 8.0,
     "rescatadas": 2,
     "excepciones": 2,
     "fallos_protocolo": 5
    },
    "Dtest": {
     "corridas": 57,
     "tokens_entrada": 2949214,
     "tokens_salida": 97435,
     "tokens_cacheados": 2486461,
     "llamadas": 590,
     "minutos": 220.0,
     "segundos_medios": 231.5,
     "pasos_medios": 9.2,
     "rescatadas": 8,
     "excepciones": 8,
     "fallos_protocolo": 8
    },
    "total": {
     "corridas": 228,
     "tokens_entrada": 5970725,
     "tokens_salida": 223429,
     "tokens_cacheados": 5045025,
     "llamadas": 1323,
     "minutos": 497.3,
     "segundos_medios": 130.9,
     "pasos_medios": 4.7,
     "rescatadas": 10,
     "excepciones": 10,
     "fallos_protocolo": 13
    }
   }
  },
  {
   "id": "deepseek-v41-flash",
   "nombre": "deepseek-v4.1-flash",
   "tipo": "nube",
   "donde": "Ollama Cloud (etiqueta :1017) · plan Pro",
   "color": "#2a78d6",
   "nota": "Sistema dd9fe84426bd4db2 en todos los niveles. La nube no informa el tiempo de generación ni de carga. Razonamiento apagado con think=false.",
   "costo_usd": 0.14,
   "costo_fuente": "panel",
   "costo_nota": "Panel de Ollama (Usage), 13:10 UTC del 11 nov: 1 114 peticiones, 4,6 M de entrada, 99,4 K de salida, 0,14 USD en total. Las peticiones y los tokens coinciden con nuestro conteo. Corrida fuera de la hora pico.",
   "precios_lista_usd_por_millon": [
    0.14,
    0.28
   ],
   "razonamiento": "apagado (think=false)",
   "num_ctx": "16384",
   "num_predict": "2048",
   "huella_sistema": "dd9fe84426bd4db2",
   "huella_ejecutor": "6f6f0f6c526fc785",
   "huella_banco": "a80b20d62efab9cd",
   "fecha": "2026-11-11",
   "huellas_sistema_por_nivel": {
    "B": "dd9fe84426bd4db2",
    "C": "dd9fe84426bd4db2",
    "Ddev": "dd9fe84426bd4db2",
    "Dtest": "dd9fe84426bd4db2"
   },
   "niveles": {
    "B": {
     "n": 99,
     "ok": 88,
     "seleccion": 88.9,
     "argumentos": 100.0,
     "fidelidad": 92.9,
     "valor": 100.0
    },
    "C": {
     "n": 27,
     "ok": 23
    },
    "Ddev": {
     "n": 45,
     "ok": 39,
     "ok_estricto": 39
    },
    "Dtest": {
     "n": 57,
     "ok": 49,
     "ok_estricto": 49
    }
   },
   "B_por_herramienta": {
    "barrer": [
     9,
     9
    ],
    "variar": [
     8,
     9
    ],
    "frente_pareto": [
     9,
     9
    ],
    "consultar_estado": [
     9,
     9
    ],
    "estimar_baseline": [
     0,
     9
    ],
    "generar_candidato": [
     9,
     9
    ],
    "predecir_recursos": [
     9,
     9
    ],
    "seleccionar_mejor": [
     9,
     9
    ],
    "sugerir_ejemplo_real": [
     9,
     9
    ],
    "verificar_restricciones": [
     9,
     9
    ],
    "verificar_limites_operativos": [
     8,
     9
    ]
   },
   "C_por_cadena": {
    "variar>verificar": [
     8,
     9
    ],
    "barrer>seleccionar": [
     6,
     9
    ],
    "predecir>verificar": [
     9,
     9
    ]
   },
   "dev_por_plantilla": {
    "T2": [
     12,
     12
    ],
    "T3": [
     2,
     3
    ],
    "T4": [
     12,
     12
    ],
    "T5": [
     7,
     12
    ],
    "T8": [
     3,
     3
    ],
    "T10": [
     3,
     3
    ]
   },
   "test_por_plantilla": {
    "T1": [
     9,
     9
    ],
    "T2": [
     5,
     5
    ],
    "T3": [
     6,
     8
    ],
    "T4": [
     5,
     5
    ],
    "T5": [
     2,
     5
    ],
    "T8": [
     6,
     8
    ],
    "T9": [
     9,
     9
    ],
    "T10": [
     7,
     8
    ]
   },
   "test_tareas": {
    "Conv1D-conv1d-C-T1-D2": [
     1,
     2,
     10
    ],
    "Conv1D-conv1d-C-T2-D1": [
     1,
     12,
     36
    ],
    "Conv1D-conv1d-C-T5-D3": [
     0,
     4,
     15
    ],
    "Conv1D-conv1d-PA-RA-T1-D1": [
     1,
     2,
     8
    ],
    "Conv1D-conv1d-PA-RA-T10-D2": [
     1,
     6,
     25
    ],
    "Conv1D-conv1d-PA-RA-T5-D2": [
     0,
     4,
     15
    ],
    "Conv1D-conv1d-PA-RA-T9-D3": [
     1,
     7,
     25
    ],
    "Conv1D-conv1d-PA-RB-T10-D1": [
     1,
     6,
     29
    ],
    "Conv1D-conv1d-PA-RB-T3-D3": [
     0,
     6,
     23
    ],
    "Conv1D-conv1d-PA-RB-T5-D1": [
     1,
     4,
     15
    ],
    "Conv1D-conv1d-PA-RB-T8-D3": [
     1,
     4,
     16
    ],
    "Conv1D-conv1d-PA-RB-T9-D2": [
     1,
     7,
     24
    ],
    "Conv1D-conv1d-PB-RA-T2-D3": [
     1,
     9,
     29
    ],
    "Conv1D-conv1d-PB-RA-T3-D2": [
     1,
     7,
     26
    ],
    "Conv1D-conv1d-PB-RA-T8-D2": [
     1,
     8,
     30
    ],
    "Conv1D-conv1d-PB-RA-T9-D1": [
     1,
     8,
     28
    ],
    "Conv1D-conv1d-PB-RB-T1-D3": [
     1,
     2,
     9
    ],
    "Conv1D-conv1d-PB-RB-T3-D1": [
     1,
     7,
     29
    ],
    "Conv1D-conv1d-PB-RB-T8-D1": [
     1,
     5,
     24
    ],
    "Conv2D-conv2d-C-T1-D1": [
     1,
     2,
     9
    ],
    "Conv2D-conv2d-C-T10-D2": [
     1,
     6,
     29
    ],
    "Conv2D-conv2d-C-T4-D3": [
     1,
     5,
     17
    ],
    "Conv2D-conv2d-C-T9-D3": [
     1,
     11,
     38
    ],
    "Conv2D-conv2d-PA-RA-T10-D1": [
     1,
     6,
     26
    ],
    "Conv2D-conv2d-PA-RA-T3-D3": [
     1,
     8,
     28
    ],
    "Conv2D-conv2d-PA-RA-T5-D1": [
     1,
     4,
     15
    ],
    "Conv2D-conv2d-PA-RA-T8-D3": [
     0,
     10,
     34
    ],
    "Conv2D-conv2d-PA-RA-T9-D2": [
     1,
     11,
     42
    ],
    "Conv2D-conv2d-PA-RB-T3-D2": [
     1,
     6,
     21
    ],
    "Conv2D-conv2d-PA-RB-T4-D1": [
     1,
     5,
     19
    ],
    "Conv2D-conv2d-PA-RB-T8-D2": [
     1,
     7,
     24
    ],
    "Conv2D-conv2d-PA-RB-T9-D1": [
     1,
     5,
     19
    ],
    "Conv2D-conv2d-PB-RA-T1-D3": [
     1,
     2,
     11
    ],
    "Conv2D-conv2d-PB-RA-T3-D1": [
     1,
     8,
     31
    ],
    "Conv2D-conv2d-PB-RA-T8-D1": [
     1,
     5,
     18
    ],
    "Conv2D-conv2d-PB-RB-T1-D2": [
     1,
     2,
     9
    ],
    "Conv2D-conv2d-PB-RB-T10-D3": [
     1,
     6,
     25
    ],
    "Conv2D-conv2d-PB-RB-T5-D3": [
     0,
     3,
     12
    ],
    "Dense-2_20-T1-D1": [
     1,
     2,
     8
    ],
    "Dense-2_20-T10-D2": [
     0,
     6,
     27
    ],
    "Dense-2_20-T4-D3": [
     1,
     4,
     15
    ],
    "Dense-2_20-T9-D3": [
     1,
     11,
     38
    ],
    "Dense-2layer-T2-D3": [
     1,
     15,
     52
    ],
    "Dense-2layer-T4-D1": [
     1,
     5,
     20
    ],
    "Dense-2layer-T8-D2": [
     0,
     12,
     52
    ],
    "Dense-2layer-T9-D1": [
     1,
     6,
     22
    ],
    "Dense-3layer-T10-D1": [
     1,
     6,
     28
    ],
    "Dense-3layer-T3-D3": [
     0,
     10,
     43
    ],
    "Dense-3layer-T4-D2": [
     1,
     6,
     20
    ],
    "Dense-3layer-T8-D3": [
     1,
     6,
     30
    ],
    "Dense-3layer-T9-D2": [
     1,
     9,
     31
    ],
    "Dense-latency-T1-D2": [
     1,
     2,
     9
    ],
    "Dense-latency-T10-D3": [
     1,
     6,
     26
    ],
    "Dense-latency-T2-D1": [
     1,
     11,
     37
    ],
    "Dense-resource-T1-D3": [
     1,
     2,
     9
    ],
    "Dense-resource-T2-D2": [
     1,
     12,
     38
    ],
    "Dense-resource-T3-D1": [
     1,
     5,
     21
    ]
   },
   "test_plantilla_de_tarea": {
    "Conv1D-conv1d-C-T1-D2": "T1",
    "Conv1D-conv1d-C-T2-D1": "T2",
    "Conv1D-conv1d-C-T5-D3": "T5",
    "Conv1D-conv1d-PA-RA-T1-D1": "T1",
    "Conv1D-conv1d-PA-RA-T10-D2": "T10",
    "Conv1D-conv1d-PA-RA-T5-D2": "T5",
    "Conv1D-conv1d-PA-RA-T9-D3": "T9",
    "Conv1D-conv1d-PA-RB-T10-D1": "T10",
    "Conv1D-conv1d-PA-RB-T3-D3": "T3",
    "Conv1D-conv1d-PA-RB-T5-D1": "T5",
    "Conv1D-conv1d-PA-RB-T8-D3": "T8",
    "Conv1D-conv1d-PA-RB-T9-D2": "T9",
    "Conv1D-conv1d-PB-RA-T2-D3": "T2",
    "Conv1D-conv1d-PB-RA-T3-D2": "T3",
    "Conv1D-conv1d-PB-RA-T8-D2": "T8",
    "Conv1D-conv1d-PB-RA-T9-D1": "T9",
    "Conv1D-conv1d-PB-RB-T1-D3": "T1",
    "Conv1D-conv1d-PB-RB-T3-D1": "T3",
    "Conv1D-conv1d-PB-RB-T8-D1": "T8",
    "Conv2D-conv2d-C-T1-D1": "T1",
    "Conv2D-conv2d-C-T10-D2": "T10",
    "Conv2D-conv2d-C-T4-D3": "T4",
    "Conv2D-conv2d-C-T9-D3": "T9",
    "Conv2D-conv2d-PA-RA-T10-D1": "T10",
    "Conv2D-conv2d-PA-RA-T3-D3": "T3",
    "Conv2D-conv2d-PA-RA-T5-D1": "T5",
    "Conv2D-conv2d-PA-RA-T8-D3": "T8",
    "Conv2D-conv2d-PA-RA-T9-D2": "T9",
    "Conv2D-conv2d-PA-RB-T3-D2": "T3",
    "Conv2D-conv2d-PA-RB-T4-D1": "T4",
    "Conv2D-conv2d-PA-RB-T8-D2": "T8",
    "Conv2D-conv2d-PA-RB-T9-D1": "T9",
    "Conv2D-conv2d-PB-RA-T1-D3": "T1",
    "Conv2D-conv2d-PB-RA-T3-D1": "T3",
    "Conv2D-conv2d-PB-RA-T8-D1": "T8",
    "Conv2D-conv2d-PB-RB-T1-D2": "T1",
    "Conv2D-conv2d-PB-RB-T10-D3": "T10",
    "Conv2D-conv2d-PB-RB-T5-D3": "T5",
    "Dense-2_20-T1-D1": "T1",
    "Dense-2_20-T10-D2": "T10",
    "Dense-2_20-T4-D3": "T4",
    "Dense-2_20-T9-D3": "T9",
    "Dense-2layer-T2-D3": "T2",
    "Dense-2layer-T4-D1": "T4",
    "Dense-2layer-T8-D2": "T8",
    "Dense-2layer-T9-D1": "T9",
    "Dense-3layer-T10-D1": "T10",
    "Dense-3layer-T3-D3": "T3",
    "Dense-3layer-T4-D2": "T4",
    "Dense-3layer-T8-D3": "T8",
    "Dense-3layer-T9-D2": "T9",
    "Dense-latency-T1-D2": "T1",
    "Dense-latency-T10-D3": "T10",
    "Dense-latency-T2-D1": "T2",
    "Dense-resource-T1-D3": "T1",
    "Dense-resource-T2-D2": "T2",
    "Dense-resource-T3-D1": "T3"
   },
   "consumo": {
    "B": {
     "corridas": 99,
     "tokens_entrada": 811477,
     "tokens_salida": 20605,
     "tokens_cacheados": 727028,
     "llamadas": 240,
     "minutos": 12.4,
     "segundos_medios": 7.5,
     "pasos_medios": 1.3,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "C": {
     "corridas": 27,
     "tokens_entrada": 348052,
     "tokens_salida": 7254,
     "tokens_cacheados": 320890,
     "llamadas": 99,
     "minutos": 5.0,
     "segundos_medios": 11.2,
     "pasos_medios": 2.7,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "Ddev": {
     "corridas": 45,
     "tokens_entrada": 1530399,
     "tokens_salida": 28080,
     "tokens_cacheados": 1416402,
     "llamadas": 349,
     "minutos": 18.1,
     "segundos_medios": 24.1,
     "pasos_medios": 6.7,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 1
    },
    "Dtest": {
     "corridas": 57,
     "tokens_entrada": 1876079,
     "tokens_salida": 43254,
     "tokens_cacheados": 1707386,
     "llamadas": 423,
     "minutos": 22.9,
     "segundos_medios": 24.1,
     "pasos_medios": 6.3,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "total": {
     "corridas": 228,
     "tokens_entrada": 4566007,
     "tokens_salida": 99193,
     "tokens_cacheados": 4171706,
     "llamadas": 1111,
     "minutos": 58.4,
     "segundos_medios": 15.4,
     "pasos_medios": 3.8,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 1
    }
   }
  },
  {
   "id": "deepseek-v4-pro",
   "nombre": "deepseek-v4-pro",
   "tipo": "nube",
   "donde": "Ollama Cloud (etiqueta :0813) · plan Pro",
   "color": "#6250d6",
   "nota": "Sistema dd9fe84426bd4db2 en todos los niveles. Razonamiento apagado con think=false. Caché de entrada: 64 % en B, 84 % en C y 90 % en D.",
   "costo_usd": 1.41,
   "costo_fuente": "panel",
   "costo_nota": "Panel de Ollama (Usage), 11 nov: 1 101 peticiones, 4,5 M de entrada, 94,3 K de salida, 1,41 USD en total (la estimación previa era 1,40). Corrida en hora pico de DeepSeek. 1,65 T de parámetros.",
   "precios_lista_usd_por_millon": [
    1.32,
    3.96
   ],
   "razonamiento": "apagado (think=false)",
   "num_ctx": "16384",
   "num_predict": "2048",
   "huella_sistema": "dd9fe84426bd4db2",
   "huella_ejecutor": "6f6f0f6c526fc785",
   "huella_banco": "a80b20d62efab9cd",
   "fecha": "2026-11-11",
   "huellas_sistema_por_nivel": {
    "B": "dd9fe84426bd4db2",
    "C": "dd9fe84426bd4db2",
    "Ddev": "dd9fe84426bd4db2",
    "Dtest": "dd9fe84426bd4db2"
   },
   "niveles": {
    "B": {
     "n": 99,
     "ok": 88,
     "seleccion": 90.9,
     "argumentos": 100.0,
     "fidelidad": 100.0,
     "valor": 98.0
    },
    "C": {
     "n": 27,
     "ok": 26
    },
    "Ddev": {
     "n": 45,
     "ok": 36,
     "ok_estricto": 36
    },
    "Dtest": {
     "n": 57,
     "ok": 48,
     "ok_estricto": 48
    }
   },
   "B_por_herramienta": {
    "barrer": [
     9,
     9
    ],
    "variar": [
     9,
     9
    ],
    "frente_pareto": [
     9,
     9
    ],
    "consultar_estado": [
     9,
     9
    ],
    "estimar_baseline": [
     0,
     9
    ],
    "generar_candidato": [
     7,
     9
    ],
    "predecir_recursos": [
     9,
     9
    ],
    "seleccionar_mejor": [
     9,
     9
    ],
    "sugerir_ejemplo_real": [
     9,
     9
    ],
    "verificar_restricciones": [
     9,
     9
    ],
    "verificar_limites_operativos": [
     9,
     9
    ]
   },
   "C_por_cadena": {
    "variar>verificar": [
     9,
     9
    ],
    "barrer>seleccionar": [
     8,
     9
    ],
    "predecir>verificar": [
     9,
     9
    ]
   },
   "dev_por_plantilla": {
    "T2": [
     12,
     12
    ],
    "T3": [
     3,
     3
    ],
    "T4": [
     12,
     12
    ],
    "T5": [
     3,
     12
    ],
    "T8": [
     3,
     3
    ],
    "T10": [
     3,
     3
    ]
   },
   "test_por_plantilla": {
    "T1": [
     9,
     9
    ],
    "T2": [
     5,
     5
    ],
    "T3": [
     6,
     8
    ],
    "T4": [
     5,
     5
    ],
    "T5": [
     1,
     5
    ],
    "T8": [
     7,
     8
    ],
    "T9": [
     9,
     9
    ],
    "T10": [
     6,
     8
    ]
   },
   "test_tareas": {
    "Conv1D-conv1d-C-T1-D2": [
     1,
     2,
     8
    ],
    "Conv1D-conv1d-C-T2-D1": [
     1,
     10,
     31
    ],
    "Conv1D-conv1d-C-T5-D3": [
     0,
     5,
     22
    ],
    "Conv1D-conv1d-PA-RA-T1-D1": [
     1,
     2,
     8
    ],
    "Conv1D-conv1d-PA-RA-T10-D2": [
     1,
     6,
     23
    ],
    "Conv1D-conv1d-PA-RA-T5-D2": [
     0,
     5,
     20
    ],
    "Conv1D-conv1d-PA-RA-T9-D3": [
     1,
     12,
     42
    ],
    "Conv1D-conv1d-PA-RB-T10-D1": [
     1,
     6,
     26
    ],
    "Conv1D-conv1d-PA-RB-T3-D3": [
     1,
     9,
     28
    ],
    "Conv1D-conv1d-PA-RB-T5-D1": [
     1,
     4,
     15
    ],
    "Conv1D-conv1d-PA-RB-T8-D3": [
     1,
     5,
     16
    ],
    "Conv1D-conv1d-PA-RB-T9-D2": [
     1,
     12,
     36
    ],
    "Conv1D-conv1d-PB-RA-T2-D3": [
     1,
     14,
     40
    ],
    "Conv1D-conv1d-PB-RA-T3-D2": [
     0,
     6,
     27
    ],
    "Conv1D-conv1d-PB-RA-T8-D2": [
     1,
     10,
     32
    ],
    "Conv1D-conv1d-PB-RA-T9-D1": [
     1,
     5,
     24
    ],
    "Conv1D-conv1d-PB-RB-T1-D3": [
     1,
     2,
     9
    ],
    "Conv1D-conv1d-PB-RB-T3-D1": [
     1,
     5,
     17
    ],
    "Conv1D-conv1d-PB-RB-T8-D1": [
     1,
     6,
     19
    ],
    "Conv2D-conv2d-C-T1-D1": [
     1,
     2,
     8
    ],
    "Conv2D-conv2d-C-T10-D2": [
     1,
     6,
     25
    ],
    "Conv2D-conv2d-C-T4-D3": [
     1,
     5,
     17
    ],
    "Conv2D-conv2d-C-T9-D3": [
     1,
     9,
     29
    ],
    "Conv2D-conv2d-PA-RA-T10-D1": [
     1,
     6,
     23
    ],
    "Conv2D-conv2d-PA-RA-T3-D3": [
     0,
     6,
     28
    ],
    "Conv2D-conv2d-PA-RA-T5-D1": [
     0,
     3,
     11
    ],
    "Conv2D-conv2d-PA-RA-T8-D3": [
     0,
     11,
     33
    ],
    "Conv2D-conv2d-PA-RA-T9-D2": [
     1,
     8,
     24
    ],
    "Conv2D-conv2d-PA-RB-T3-D2": [
     1,
     6,
     22
    ],
    "Conv2D-conv2d-PA-RB-T4-D1": [
     1,
     6,
     21
    ],
    "Conv2D-conv2d-PA-RB-T8-D2": [
     1,
     8,
     25
    ],
    "Conv2D-conv2d-PA-RB-T9-D1": [
     1,
     4,
     18
    ],
    "Conv2D-conv2d-PB-RA-T1-D3": [
     1,
     2,
     8
    ],
    "Conv2D-conv2d-PB-RA-T3-D1": [
     1,
     5,
     16
    ],
    "Conv2D-conv2d-PB-RA-T8-D1": [
     1,
     5,
     18
    ],
    "Conv2D-conv2d-PB-RB-T1-D2": [
     1,
     2,
     8
    ],
    "Conv2D-conv2d-PB-RB-T10-D3": [
     1,
     6,
     23
    ],
    "Conv2D-conv2d-PB-RB-T5-D3": [
     0,
     3,
     11
    ],
    "Dense-2_20-T1-D1": [
     1,
     2,
     8
    ],
    "Dense-2_20-T10-D2": [
     0,
     6,
     26
    ],
    "Dense-2_20-T4-D3": [
     1,
     7,
     21
    ],
    "Dense-2_20-T9-D3": [
     1,
     19,
     54
    ],
    "Dense-2layer-T2-D3": [
     1,
     14,
     39
    ],
    "Dense-2layer-T4-D1": [
     1,
     6,
     20
    ],
    "Dense-2layer-T8-D2": [
     1,
     8,
     24
    ],
    "Dense-2layer-T9-D1": [
     1,
     9,
     32
    ],
    "Dense-3layer-T10-D1": [
     0,
     6,
     26
    ],
    "Dense-3layer-T3-D3": [
     1,
     7,
     30
    ],
    "Dense-3layer-T4-D2": [
     1,
     6,
     20
    ],
    "Dense-3layer-T8-D3": [
     1,
     10,
     33
    ],
    "Dense-3layer-T9-D2": [
     1,
     13,
     45
    ],
    "Dense-latency-T1-D2": [
     1,
     2,
     10
    ],
    "Dense-latency-T10-D3": [
     1,
     6,
     25
    ],
    "Dense-latency-T2-D1": [
     1,
     9,
     27
    ],
    "Dense-resource-T1-D3": [
     1,
     2,
     8
    ],
    "Dense-resource-T2-D2": [
     1,
     7,
     23
    ],
    "Dense-resource-T3-D1": [
     1,
     8,
     28
    ]
   },
   "test_plantilla_de_tarea": {
    "Conv1D-conv1d-C-T1-D2": "T1",
    "Conv1D-conv1d-C-T2-D1": "T2",
    "Conv1D-conv1d-C-T5-D3": "T5",
    "Conv1D-conv1d-PA-RA-T1-D1": "T1",
    "Conv1D-conv1d-PA-RA-T10-D2": "T10",
    "Conv1D-conv1d-PA-RA-T5-D2": "T5",
    "Conv1D-conv1d-PA-RA-T9-D3": "T9",
    "Conv1D-conv1d-PA-RB-T10-D1": "T10",
    "Conv1D-conv1d-PA-RB-T3-D3": "T3",
    "Conv1D-conv1d-PA-RB-T5-D1": "T5",
    "Conv1D-conv1d-PA-RB-T8-D3": "T8",
    "Conv1D-conv1d-PA-RB-T9-D2": "T9",
    "Conv1D-conv1d-PB-RA-T2-D3": "T2",
    "Conv1D-conv1d-PB-RA-T3-D2": "T3",
    "Conv1D-conv1d-PB-RA-T8-D2": "T8",
    "Conv1D-conv1d-PB-RA-T9-D1": "T9",
    "Conv1D-conv1d-PB-RB-T1-D3": "T1",
    "Conv1D-conv1d-PB-RB-T3-D1": "T3",
    "Conv1D-conv1d-PB-RB-T8-D1": "T8",
    "Conv2D-conv2d-C-T1-D1": "T1",
    "Conv2D-conv2d-C-T10-D2": "T10",
    "Conv2D-conv2d-C-T4-D3": "T4",
    "Conv2D-conv2d-C-T9-D3": "T9",
    "Conv2D-conv2d-PA-RA-T10-D1": "T10",
    "Conv2D-conv2d-PA-RA-T3-D3": "T3",
    "Conv2D-conv2d-PA-RA-T5-D1": "T5",
    "Conv2D-conv2d-PA-RA-T8-D3": "T8",
    "Conv2D-conv2d-PA-RA-T9-D2": "T9",
    "Conv2D-conv2d-PA-RB-T3-D2": "T3",
    "Conv2D-conv2d-PA-RB-T4-D1": "T4",
    "Conv2D-conv2d-PA-RB-T8-D2": "T8",
    "Conv2D-conv2d-PA-RB-T9-D1": "T9",
    "Conv2D-conv2d-PB-RA-T1-D3": "T1",
    "Conv2D-conv2d-PB-RA-T3-D1": "T3",
    "Conv2D-conv2d-PB-RA-T8-D1": "T8",
    "Conv2D-conv2d-PB-RB-T1-D2": "T1",
    "Conv2D-conv2d-PB-RB-T10-D3": "T10",
    "Conv2D-conv2d-PB-RB-T5-D3": "T5",
    "Dense-2_20-T1-D1": "T1",
    "Dense-2_20-T10-D2": "T10",
    "Dense-2_20-T4-D3": "T4",
    "Dense-2_20-T9-D3": "T9",
    "Dense-2layer-T2-D3": "T2",
    "Dense-2layer-T4-D1": "T4",
    "Dense-2layer-T8-D2": "T8",
    "Dense-2layer-T9-D1": "T9",
    "Dense-3layer-T10-D1": "T10",
    "Dense-3layer-T3-D3": "T3",
    "Dense-3layer-T4-D2": "T4",
    "Dense-3layer-T8-D3": "T8",
    "Dense-3layer-T9-D2": "T9",
    "Dense-latency-T1-D2": "T1",
    "Dense-latency-T10-D3": "T10",
    "Dense-latency-T2-D1": "T2",
    "Dense-resource-T1-D3": "T1",
    "Dense-resource-T2-D2": "T2",
    "Dense-resource-T3-D1": "T3"
   },
   "consumo": {
    "B": {
     "corridas": 99,
     "tokens_entrada": 742161,
     "tokens_salida": 15482,
     "tokens_cacheados": 472803,
     "llamadas": 223,
     "minutos": 10.6,
     "segundos_medios": 6.4,
     "pasos_medios": 1.2,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "C": {
     "corridas": 27,
     "tokens_entrada": 297278,
     "tokens_salida": 5460,
     "tokens_cacheados": 248984,
     "llamadas": 86,
     "minutos": 4.3,
     "segundos_medios": 9.7,
     "pasos_medios": 2.2,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "Ddev": {
     "corridas": 45,
     "tokens_entrada": 1527429,
     "tokens_salida": 28167,
     "tokens_cacheados": 1395304,
     "llamadas": 350,
     "minutos": 17.5,
     "segundos_medios": 23.4,
     "pasos_medios": 6.7,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "Dtest": {
     "corridas": 57,
     "tokens_entrada": 1964602,
     "tokens_salida": 45139,
     "tokens_cacheados": 1765825,
     "llamadas": 441,
     "minutos": 21.9,
     "segundos_medios": 23.0,
     "pasos_medios": 6.6,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 3
    },
    "total": {
     "corridas": 228,
     "tokens_entrada": 4531470,
     "tokens_salida": 94248,
     "tokens_cacheados": 3882916,
     "llamadas": 1100,
     "minutos": 54.3,
     "segundos_medios": 14.3,
     "pasos_medios": 3.7,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 3
    }
   }
  },
  {
   "id": "kimi-k26",
   "nombre": "kimi-k2.6",
   "tipo": "nube",
   "donde": "Ollama Cloud · plan Pro",
   "color": "#0f9d8a",
   "nota": "Sistema dd9fe84426bd4db2 en todos los niveles. Razonamiento apagado con think=false. En B se muestra solo la repetición 1 (99 corridas, comparable con los demás); las 3 repeticiones dieron 270/297 (91 %) de correctas.",
   "costo_usd": 2.78,
   "costo_fuente": "panel",
   "costo_nota": "Panel de Ollama (Usage), 11 nov: 1 630 peticiones, 7,0 M de entrada, 296,7 K de salida, 2,78 USD en total; coincide con nuestro conteo (1 629 llamadas, 6 985 347 de entrada, 296 630 de salida). Ficha: 0,95 de entrada, 0,16 de entrada en caché y 4,00 de salida por millón; caché del 91 %. B se corrió con 3 repeticiones (297 corridas, 0,33 USD por cada una): con 1 repetición como los demás el costo equivalente sería de unos 2,13 USD. 1,04 T de parámetros, INT4.",
   "precios_lista_usd_por_millon": [
    0.95,
    4.0
   ],
   "razonamiento": "apagado (think=false)",
   "num_ctx": "16384",
   "num_predict": "2048",
   "huella_sistema": "dd9fe84426bd4db2",
   "huella_ejecutor": "7d6027bc4c2de628",
   "huella_banco": "a80b20d62efab9cd",
   "fecha": "2026-11-11",
   "huellas_sistema_por_nivel": {
    "B": "dd9fe84426bd4db2",
    "C": "dd9fe84426bd4db2",
    "Ddev": "dd9fe84426bd4db2",
    "Dtest": "dd9fe84426bd4db2"
   },
   "niveles": {
    "B": {
     "n": 99,
     "ok": 90,
     "seleccion": 90.9,
     "argumentos": 100.0,
     "fidelidad": 94.9,
     "valor": 100.0
    },
    "C": {
     "n": 27,
     "ok": 26
    },
    "Ddev": {
     "n": 45,
     "ok": 39,
     "ok_estricto": 39
    },
    "Dtest": {
     "n": 57,
     "ok": 53,
     "ok_estricto": 53
    }
   },
   "B_por_herramienta": {
    "barrer": [
     9,
     9
    ],
    "variar": [
     9,
     9
    ],
    "frente_pareto": [
     9,
     9
    ],
    "consultar_estado": [
     9,
     9
    ],
    "estimar_baseline": [
     0,
     9
    ],
    "generar_candidato": [
     9,
     9
    ],
    "predecir_recursos": [
     9,
     9
    ],
    "seleccionar_mejor": [
     9,
     9
    ],
    "sugerir_ejemplo_real": [
     9,
     9
    ],
    "verificar_restricciones": [
     9,
     9
    ],
    "verificar_limites_operativos": [
     9,
     9
    ]
   },
   "C_por_cadena": {
    "variar>verificar": [
     9,
     9
    ],
    "barrer>seleccionar": [
     8,
     9
    ],
    "predecir>verificar": [
     9,
     9
    ]
   },
   "dev_por_plantilla": {
    "T2": [
     12,
     12
    ],
    "T3": [
     2,
     3
    ],
    "T4": [
     12,
     12
    ],
    "T5": [
     7,
     12
    ],
    "T8": [
     3,
     3
    ],
    "T10": [
     3,
     3
    ]
   },
   "test_por_plantilla": {
    "T1": [
     9,
     9
    ],
    "T2": [
     5,
     5
    ],
    "T3": [
     8,
     8
    ],
    "T4": [
     5,
     5
    ],
    "T5": [
     2,
     5
    ],
    "T8": [
     8,
     8
    ],
    "T9": [
     9,
     9
    ],
    "T10": [
     7,
     8
    ]
   },
   "test_tareas": {
    "Conv1D-conv1d-C-T1-D2": [
     1,
     2,
     10
    ],
    "Conv1D-conv1d-C-T2-D1": [
     1,
     11,
     42
    ],
    "Conv1D-conv1d-C-T5-D3": [
     0,
     5,
     41
    ],
    "Conv1D-conv1d-PA-RA-T1-D1": [
     1,
     2,
     10
    ],
    "Conv1D-conv1d-PA-RA-T10-D2": [
     1,
     6,
     26
    ],
    "Conv1D-conv1d-PA-RA-T5-D2": [
     0,
     5,
     43
    ],
    "Conv1D-conv1d-PA-RA-T9-D3": [
     1,
     9,
     53
    ],
    "Conv1D-conv1d-PA-RB-T10-D1": [
     1,
     6,
     34
    ],
    "Conv1D-conv1d-PA-RB-T3-D3": [
     1,
     8,
     55
    ],
    "Conv1D-conv1d-PA-RB-T5-D1": [
     1,
     4,
     34
    ],
    "Conv1D-conv1d-PA-RB-T8-D3": [
     1,
     6,
     36
    ],
    "Conv1D-conv1d-PA-RB-T9-D2": [
     1,
     6,
     40
    ],
    "Conv1D-conv1d-PB-RA-T2-D3": [
     1,
     14,
     47
    ],
    "Conv1D-conv1d-PB-RA-T3-D2": [
     1,
     13,
     59
    ],
    "Conv1D-conv1d-PB-RA-T8-D2": [
     1,
     5,
     28
    ],
    "Conv1D-conv1d-PB-RA-T9-D1": [
     1,
     10,
     49
    ],
    "Conv1D-conv1d-PB-RB-T1-D3": [
     1,
     2,
     9
    ],
    "Conv1D-conv1d-PB-RB-T3-D1": [
     1,
     11,
     49
    ],
    "Conv1D-conv1d-PB-RB-T8-D1": [
     1,
     7,
     49
    ],
    "Conv2D-conv2d-C-T1-D1": [
     1,
     2,
     11
    ],
    "Conv2D-conv2d-C-T10-D2": [
     1,
     6,
     33
    ],
    "Conv2D-conv2d-C-T4-D3": [
     1,
     5,
     22
    ],
    "Conv2D-conv2d-C-T9-D3": [
     1,
     9,
     52
    ],
    "Conv2D-conv2d-PA-RA-T10-D1": [
     1,
     6,
     42
    ],
    "Conv2D-conv2d-PA-RA-T3-D3": [
     1,
     6,
     35
    ],
    "Conv2D-conv2d-PA-RA-T5-D1": [
     1,
     6,
     31
    ],
    "Conv2D-conv2d-PA-RA-T8-D3": [
     1,
     5,
     53
    ],
    "Conv2D-conv2d-PA-RA-T9-D2": [
     1,
     10,
     54
    ],
    "Conv2D-conv2d-PA-RB-T3-D2": [
     1,
     8,
     53
    ],
    "Conv2D-conv2d-PA-RB-T4-D1": [
     1,
     6,
     25
    ],
    "Conv2D-conv2d-PA-RB-T8-D2": [
     1,
     4,
     18
    ],
    "Conv2D-conv2d-PA-RB-T9-D1": [
     1,
     7,
     36
    ],
    "Conv2D-conv2d-PB-RA-T1-D3": [
     1,
     2,
     9
    ],
    "Conv2D-conv2d-PB-RA-T3-D1": [
     1,
     9,
     50
    ],
    "Conv2D-conv2d-PB-RA-T8-D1": [
     1,
     7,
     44
    ],
    "Conv2D-conv2d-PB-RB-T1-D2": [
     1,
     2,
     11
    ],
    "Conv2D-conv2d-PB-RB-T10-D3": [
     1,
     6,
     33
    ],
    "Conv2D-conv2d-PB-RB-T5-D3": [
     0,
     5,
     30
    ],
    "Dense-2_20-T1-D1": [
     1,
     2,
     10
    ],
    "Dense-2_20-T10-D2": [
     1,
     9,
     43
    ],
    "Dense-2_20-T4-D3": [
     1,
     7,
     29
    ],
    "Dense-2_20-T9-D3": [
     1,
     9,
     72
    ],
    "Dense-2layer-T2-D3": [
     1,
     15,
     51
    ],
    "Dense-2layer-T4-D1": [
     1,
     5,
     32
    ],
    "Dense-2layer-T8-D2": [
     1,
     12,
     54
    ],
    "Dense-2layer-T9-D1": [
     1,
     4,
     22
    ],
    "Dense-3layer-T10-D1": [
     0,
     6,
     28
    ],
    "Dense-3layer-T3-D3": [
     1,
     9,
     47
    ],
    "Dense-3layer-T4-D2": [
     1,
     6,
     23
    ],
    "Dense-3layer-T8-D3": [
     1,
     10,
     34
    ],
    "Dense-3layer-T9-D2": [
     1,
     8,
     62
    ],
    "Dense-latency-T1-D2": [
     1,
     2,
     11
    ],
    "Dense-latency-T10-D3": [
     1,
     6,
     29
    ],
    "Dense-latency-T2-D1": [
     1,
     11,
     42
    ],
    "Dense-resource-T1-D3": [
     1,
     2,
     9
    ],
    "Dense-resource-T2-D2": [
     1,
     13,
     46
    ],
    "Dense-resource-T3-D1": [
     1,
     4,
     22
    ]
   },
   "test_plantilla_de_tarea": {
    "Conv1D-conv1d-C-T1-D2": "T1",
    "Conv1D-conv1d-C-T2-D1": "T2",
    "Conv1D-conv1d-C-T5-D3": "T5",
    "Conv1D-conv1d-PA-RA-T1-D1": "T1",
    "Conv1D-conv1d-PA-RA-T10-D2": "T10",
    "Conv1D-conv1d-PA-RA-T5-D2": "T5",
    "Conv1D-conv1d-PA-RA-T9-D3": "T9",
    "Conv1D-conv1d-PA-RB-T10-D1": "T10",
    "Conv1D-conv1d-PA-RB-T3-D3": "T3",
    "Conv1D-conv1d-PA-RB-T5-D1": "T5",
    "Conv1D-conv1d-PA-RB-T8-D3": "T8",
    "Conv1D-conv1d-PA-RB-T9-D2": "T9",
    "Conv1D-conv1d-PB-RA-T2-D3": "T2",
    "Conv1D-conv1d-PB-RA-T3-D2": "T3",
    "Conv1D-conv1d-PB-RA-T8-D2": "T8",
    "Conv1D-conv1d-PB-RA-T9-D1": "T9",
    "Conv1D-conv1d-PB-RB-T1-D3": "T1",
    "Conv1D-conv1d-PB-RB-T3-D1": "T3",
    "Conv1D-conv1d-PB-RB-T8-D1": "T8",
    "Conv2D-conv2d-C-T1-D1": "T1",
    "Conv2D-conv2d-C-T10-D2": "T10",
    "Conv2D-conv2d-C-T4-D3": "T4",
    "Conv2D-conv2d-C-T9-D3": "T9",
    "Conv2D-conv2d-PA-RA-T10-D1": "T10",
    "Conv2D-conv2d-PA-RA-T3-D3": "T3",
    "Conv2D-conv2d-PA-RA-T5-D1": "T5",
    "Conv2D-conv2d-PA-RA-T8-D3": "T8",
    "Conv2D-conv2d-PA-RA-T9-D2": "T9",
    "Conv2D-conv2d-PA-RB-T3-D2": "T3",
    "Conv2D-conv2d-PA-RB-T4-D1": "T4",
    "Conv2D-conv2d-PA-RB-T8-D2": "T8",
    "Conv2D-conv2d-PA-RB-T9-D1": "T9",
    "Conv2D-conv2d-PB-RA-T1-D3": "T1",
    "Conv2D-conv2d-PB-RA-T3-D1": "T3",
    "Conv2D-conv2d-PB-RA-T8-D1": "T8",
    "Conv2D-conv2d-PB-RB-T1-D2": "T1",
    "Conv2D-conv2d-PB-RB-T10-D3": "T10",
    "Conv2D-conv2d-PB-RB-T5-D3": "T5",
    "Dense-2_20-T1-D1": "T1",
    "Dense-2_20-T10-D2": "T10",
    "Dense-2_20-T4-D3": "T4",
    "Dense-2_20-T9-D3": "T9",
    "Dense-2layer-T2-D3": "T2",
    "Dense-2layer-T4-D1": "T4",
    "Dense-2layer-T8-D2": "T8",
    "Dense-2layer-T9-D1": "T9",
    "Dense-3layer-T10-D1": "T10",
    "Dense-3layer-T3-D3": "T3",
    "Dense-3layer-T4-D2": "T4",
    "Dense-3layer-T8-D3": "T8",
    "Dense-3layer-T9-D2": "T9",
    "Dense-latency-T1-D2": "T1",
    "Dense-latency-T10-D3": "T10",
    "Dense-latency-T2-D1": "T2",
    "Dense-resource-T1-D3": "T1",
    "Dense-resource-T2-D2": "T2",
    "Dense-resource-T3-D1": "T3"
   },
   "consumo": {
    "B": {
     "corridas": 99,
     "tokens_entrada": 821462,
     "tokens_salida": 34183,
     "tokens_cacheados": 738048,
     "llamadas": 236,
     "minutos": 15.3,
     "segundos_medios": 9.3,
     "pasos_medios": 1.3,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "C": {
     "corridas": 27,
     "tokens_entrada": 326976,
     "tokens_salida": 10371,
     "tokens_cacheados": 304608,
     "llamadas": 90,
     "minutos": 5.0,
     "segundos_medios": 11.2,
     "pasos_medios": 2.3,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "Ddev": {
     "corridas": 45,
     "tokens_entrada": 1931512,
     "tokens_salida": 72680,
     "tokens_cacheados": 1784096,
     "llamadas": 387,
     "minutos": 28.2,
     "segundos_medios": 37.5,
     "pasos_medios": 7.5,
     "rescatadas": 1,
     "excepciones": 1,
     "fallos_protocolo": 2
    },
    "Dtest": {
     "corridas": 57,
     "tokens_entrada": 2279514,
     "tokens_salida": 110419,
     "tokens_cacheados": 2068448,
     "llamadas": 448,
     "minutos": 33.7,
     "segundos_medios": 35.5,
     "pasos_medios": 6.7,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "total": {
     "corridas": 228,
     "tokens_entrada": 5359464,
     "tokens_salida": 227653,
     "tokens_cacheados": 4895200,
     "llamadas": 1161,
     "minutos": 82.1,
     "segundos_medios": 21.6,
     "pasos_medios": 4.0,
     "rescatadas": 1,
     "excepciones": 1,
     "fallos_protocolo": 2
    }
   }
  },
  {
   "id": "glm-52",
   "nombre": "glm-5.2",
   "tipo": "nube",
   "donde": "Ollama Cloud · plan Pro",
   "color": "#7c5cff",
   "nota": "Sistema dd9fe84426bd4db2 en todos los niveles. Razonamiento apagado con think=false. En B, 8 de las 17 corridas falladas son de generar_candidato: el modelo crea el candidato con los datos correctos (mismas capas, rf y bits que lo pedido) y entrega el id sin evaluarlo, que es lo que pide la tarea; el puntaje estricto compara los tamaños de capa, que solo se rellenan tras predecir_recursos, así que lo cuenta como fallo. Se deja el puntaje oficial (82/99) para no cambiar la regla a mitad del estudio; con un criterio de capas, rf y bits serían 90/99.",
   "costo_usd": 1.84,
   "costo_fuente": "panel",
   "costo_nota": "Panel de Ollama (Usage), 11 nov: 972 peticiones, 3,8 M de entrada, 126,2 K de salida, 1,84 USD en total; coincide con nuestro conteo (971 llamadas más la prueba de humo, 3 823 482 de entrada, 126 132 de salida; caché del 93 %). La tarifa de lista de la API de Z.ai (1,40 de entrada, 0,26 en caché y 4,40 de salida por millón; la de Ollama no está publicada para este modelo) da 1,837 USD: coincide. B con 1 repetición (0,36 USD). 756 mil millones de parámetros.",
   "precios_lista_usd_por_millon": [
    1.4,
    4.4
   ],
   "razonamiento": "apagado (think=false)",
   "num_ctx": "16384",
   "num_predict": "2048",
   "huella_sistema": "dd9fe84426bd4db2",
   "huella_ejecutor": "7d6027bc4c2de628",
   "huella_banco": "a80b20d62efab9cd",
   "fecha": "2026-11-12",
   "huellas_sistema_por_nivel": {
    "B": "dd9fe84426bd4db2",
    "C": "dd9fe84426bd4db2",
    "Ddev": "dd9fe84426bd4db2",
    "Dtest": "dd9fe84426bd4db2"
   },
   "niveles": {
    "B": {
     "n": 99,
     "ok": 82,
     "seleccion": 90.9,
     "argumentos": 100.0,
     "fidelidad": 96.0,
     "valor": 91.9
    },
    "C": {
     "n": 27,
     "ok": 26
    },
    "Ddev": {
     "n": 45,
     "ok": 38,
     "ok_estricto": 38
    },
    "Dtest": {
     "n": 57,
     "ok": 52,
     "ok_estricto": 52
    }
   },
   "B_por_herramienta": {
    "barrer": [
     9,
     9
    ],
    "variar": [
     9,
     9
    ],
    "frente_pareto": [
     9,
     9
    ],
    "consultar_estado": [
     9,
     9
    ],
    "estimar_baseline": [
     0,
     9
    ],
    "generar_candidato": [
     1,
     9
    ],
    "predecir_recursos": [
     9,
     9
    ],
    "seleccionar_mejor": [
     9,
     9
    ],
    "sugerir_ejemplo_real": [
     9,
     9
    ],
    "verificar_restricciones": [
     9,
     9
    ],
    "verificar_limites_operativos": [
     9,
     9
    ]
   },
   "C_por_cadena": {
    "variar>verificar": [
     9,
     9
    ],
    "barrer>seleccionar": [
     8,
     9
    ],
    "predecir>verificar": [
     9,
     9
    ]
   },
   "dev_por_plantilla": {
    "T2": [
     12,
     12
    ],
    "T3": [
     3,
     3
    ],
    "T4": [
     12,
     12
    ],
    "T5": [
     5,
     12
    ],
    "T8": [
     3,
     3
    ],
    "T10": [
     3,
     3
    ]
   },
   "test_por_plantilla": {
    "T1": [
     9,
     9
    ],
    "T2": [
     5,
     5
    ],
    "T3": [
     8,
     8
    ],
    "T4": [
     5,
     5
    ],
    "T5": [
     2,
     5
    ],
    "T8": [
     8,
     8
    ],
    "T9": [
     9,
     9
    ],
    "T10": [
     6,
     8
    ]
   },
   "test_tareas": {
    "Conv1D-conv1d-C-T1-D2": [
     1,
     2,
     9
    ],
    "Conv1D-conv1d-C-T2-D1": [
     1,
     9,
     32
    ],
    "Conv1D-conv1d-C-T5-D3": [
     0,
     4,
     17
    ],
    "Conv1D-conv1d-PA-RA-T1-D1": [
     1,
     2,
     9
    ],
    "Conv1D-conv1d-PA-RA-T10-D2": [
     1,
     6,
     28
    ],
    "Conv1D-conv1d-PA-RA-T5-D2": [
     0,
     5,
     21
    ],
    "Conv1D-conv1d-PA-RA-T9-D3": [
     1,
     7,
     27
    ],
    "Conv1D-conv1d-PA-RB-T10-D1": [
     1,
     7,
     31
    ],
    "Conv1D-conv1d-PA-RB-T3-D3": [
     1,
     7,
     35
    ],
    "Conv1D-conv1d-PA-RB-T5-D1": [
     1,
     4,
     17
    ],
    "Conv1D-conv1d-PA-RB-T8-D3": [
     1,
     3,
     13
    ],
    "Conv1D-conv1d-PA-RB-T9-D2": [
     1,
     8,
     35
    ],
    "Conv1D-conv1d-PB-RA-T2-D3": [
     1,
     9,
     31
    ],
    "Conv1D-conv1d-PB-RA-T3-D2": [
     1,
     8,
     32
    ],
    "Conv1D-conv1d-PB-RA-T8-D2": [
     1,
     5,
     22
    ],
    "Conv1D-conv1d-PB-RA-T9-D1": [
     1,
     5,
     23
    ],
    "Conv1D-conv1d-PB-RB-T1-D3": [
     1,
     2,
     9
    ],
    "Conv1D-conv1d-PB-RB-T3-D1": [
     1,
     6,
     24
    ],
    "Conv1D-conv1d-PB-RB-T8-D1": [
     1,
     5,
     20
    ],
    "Conv2D-conv2d-C-T1-D1": [
     1,
     2,
     11
    ],
    "Conv2D-conv2d-C-T10-D2": [
     1,
     6,
     37
    ],
    "Conv2D-conv2d-C-T4-D3": [
     1,
     3,
     51
    ],
    "Conv2D-conv2d-C-T9-D3": [
     1,
     7,
     118
    ],
    "Conv2D-conv2d-PA-RA-T10-D1": [
     1,
     7,
     30
    ],
    "Conv2D-conv2d-PA-RA-T3-D3": [
     1,
     6,
     23
    ],
    "Conv2D-conv2d-PA-RA-T5-D1": [
     1,
     5,
     20
    ],
    "Conv2D-conv2d-PA-RA-T8-D3": [
     1,
     7,
     27
    ],
    "Conv2D-conv2d-PA-RA-T9-D2": [
     1,
     7,
     28
    ],
    "Conv2D-conv2d-PA-RB-T3-D2": [
     1,
     8,
     36
    ],
    "Conv2D-conv2d-PA-RB-T4-D1": [
     1,
     6,
     24
    ],
    "Conv2D-conv2d-PA-RB-T8-D2": [
     1,
     7,
     26
    ],
    "Conv2D-conv2d-PA-RB-T9-D1": [
     1,
     7,
     26
    ],
    "Conv2D-conv2d-PB-RA-T1-D3": [
     1,
     2,
     9
    ],
    "Conv2D-conv2d-PB-RA-T3-D1": [
     1,
     7,
     26
    ],
    "Conv2D-conv2d-PB-RA-T8-D1": [
     1,
     3,
     13
    ],
    "Conv2D-conv2d-PB-RB-T1-D2": [
     1,
     2,
     9
    ],
    "Conv2D-conv2d-PB-RB-T10-D3": [
     1,
     6,
     27
    ],
    "Conv2D-conv2d-PB-RB-T5-D3": [
     0,
     4,
     17
    ],
    "Dense-2_20-T1-D1": [
     1,
     2,
     9
    ],
    "Dense-2_20-T10-D2": [
     0,
     9,
     39
    ],
    "Dense-2_20-T4-D3": [
     1,
     3,
     13
    ],
    "Dense-2_20-T9-D3": [
     1,
     8,
     36
    ],
    "Dense-2layer-T2-D3": [
     1,
     9,
     30
    ],
    "Dense-2layer-T4-D1": [
     1,
     6,
     24
    ],
    "Dense-2layer-T8-D2": [
     1,
     6,
     22
    ],
    "Dense-2layer-T9-D1": [
     1,
     4,
     19
    ],
    "Dense-3layer-T10-D1": [
     0,
     6,
     26
    ],
    "Dense-3layer-T3-D3": [
     1,
     7,
     28
    ],
    "Dense-3layer-T4-D2": [
     1,
     6,
     22
    ],
    "Dense-3layer-T8-D3": [
     1,
     4,
     16
    ],
    "Dense-3layer-T9-D2": [
     1,
     7,
     30
    ],
    "Dense-latency-T1-D2": [
     1,
     2,
     11
    ],
    "Dense-latency-T10-D3": [
     1,
     6,
     28
    ],
    "Dense-latency-T2-D1": [
     1,
     7,
     32
    ],
    "Dense-resource-T1-D3": [
     1,
     2,
     12
    ],
    "Dense-resource-T2-D2": [
     1,
     12,
     43
    ],
    "Dense-resource-T3-D1": [
     1,
     4,
     16
    ]
   },
   "test_plantilla_de_tarea": {
    "Conv1D-conv1d-C-T1-D2": "T1",
    "Conv1D-conv1d-C-T2-D1": "T2",
    "Conv1D-conv1d-C-T5-D3": "T5",
    "Conv1D-conv1d-PA-RA-T1-D1": "T1",
    "Conv1D-conv1d-PA-RA-T10-D2": "T10",
    "Conv1D-conv1d-PA-RA-T5-D2": "T5",
    "Conv1D-conv1d-PA-RA-T9-D3": "T9",
    "Conv1D-conv1d-PA-RB-T10-D1": "T10",
    "Conv1D-conv1d-PA-RB-T3-D3": "T3",
    "Conv1D-conv1d-PA-RB-T5-D1": "T5",
    "Conv1D-conv1d-PA-RB-T8-D3": "T8",
    "Conv1D-conv1d-PA-RB-T9-D2": "T9",
    "Conv1D-conv1d-PB-RA-T2-D3": "T2",
    "Conv1D-conv1d-PB-RA-T3-D2": "T3",
    "Conv1D-conv1d-PB-RA-T8-D2": "T8",
    "Conv1D-conv1d-PB-RA-T9-D1": "T9",
    "Conv1D-conv1d-PB-RB-T1-D3": "T1",
    "Conv1D-conv1d-PB-RB-T3-D1": "T3",
    "Conv1D-conv1d-PB-RB-T8-D1": "T8",
    "Conv2D-conv2d-C-T1-D1": "T1",
    "Conv2D-conv2d-C-T10-D2": "T10",
    "Conv2D-conv2d-C-T4-D3": "T4",
    "Conv2D-conv2d-C-T9-D3": "T9",
    "Conv2D-conv2d-PA-RA-T10-D1": "T10",
    "Conv2D-conv2d-PA-RA-T3-D3": "T3",
    "Conv2D-conv2d-PA-RA-T5-D1": "T5",
    "Conv2D-conv2d-PA-RA-T8-D3": "T8",
    "Conv2D-conv2d-PA-RA-T9-D2": "T9",
    "Conv2D-conv2d-PA-RB-T3-D2": "T3",
    "Conv2D-conv2d-PA-RB-T4-D1": "T4",
    "Conv2D-conv2d-PA-RB-T8-D2": "T8",
    "Conv2D-conv2d-PA-RB-T9-D1": "T9",
    "Conv2D-conv2d-PB-RA-T1-D3": "T1",
    "Conv2D-conv2d-PB-RA-T3-D1": "T3",
    "Conv2D-conv2d-PB-RA-T8-D1": "T8",
    "Conv2D-conv2d-PB-RB-T1-D2": "T1",
    "Conv2D-conv2d-PB-RB-T10-D3": "T10",
    "Conv2D-conv2d-PB-RB-T5-D3": "T5",
    "Dense-2_20-T1-D1": "T1",
    "Dense-2_20-T10-D2": "T10",
    "Dense-2_20-T4-D3": "T4",
    "Dense-2_20-T9-D3": "T9",
    "Dense-2layer-T2-D3": "T2",
    "Dense-2layer-T4-D1": "T4",
    "Dense-2layer-T8-D2": "T8",
    "Dense-2layer-T9-D1": "T9",
    "Dense-3layer-T10-D1": "T10",
    "Dense-3layer-T3-D3": "T3",
    "Dense-3layer-T4-D2": "T4",
    "Dense-3layer-T8-D3": "T8",
    "Dense-3layer-T9-D2": "T9",
    "Dense-latency-T1-D2": "T1",
    "Dense-latency-T10-D3": "T10",
    "Dense-latency-T2-D1": "T2",
    "Dense-resource-T1-D3": "T1",
    "Dense-resource-T2-D2": "T2",
    "Dense-resource-T3-D1": "T3"
   },
   "consumo": {
    "B": {
     "corridas": 99,
     "tokens_entrada": 698145,
     "tokens_salida": 26143,
     "tokens_cacheados": 645360,
     "llamadas": 217,
     "minutos": 12.6,
     "segundos_medios": 7.6,
     "pasos_medios": 1.1,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "C": {
     "corridas": 27,
     "tokens_entrada": 279052,
     "tokens_salida": 8819,
     "tokens_cacheados": 263772,
     "llamadas": 83,
     "minutos": 4.5,
     "segundos_medios": 10.0,
     "pasos_medios": 2.1,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "Ddev": {
     "corridas": 45,
     "tokens_entrada": 1210124,
     "tokens_salida": 35383,
     "tokens_cacheados": 1141580,
     "llamadas": 290,
     "minutos": 16.2,
     "segundos_medios": 21.6,
     "pasos_medios": 5.4,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "Dtest": {
     "corridas": 57,
     "tokens_entrada": 1636161,
     "tokens_salida": 55787,
     "tokens_cacheados": 1520204,
     "llamadas": 381,
     "minutos": 24.2,
     "segundos_medios": 25.5,
     "pasos_medios": 5.5,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    },
    "total": {
     "corridas": 228,
     "tokens_entrada": 3823482,
     "tokens_salida": 126132,
     "tokens_cacheados": 3570916,
     "llamadas": 971,
     "minutos": 57.5,
     "segundos_medios": 15.1,
     "pasos_medios": 3.2,
     "rescatadas": 0,
     "excepciones": 0,
     "fallos_protocolo": 0
    }
   }
  }
 ]
};
