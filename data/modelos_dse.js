// Generado por banco_dse/base/exportar_web.py. No editar a mano: añade el modelo en modelos_web.json y vuelve a generarlo.
window.MODELOS_DSE = {
 "generado": "2026-11-11 02:13",
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
   "costo_usd": 0.09,
   "costo_nota": "Panel de Ollama (Usage), actualizado a 06:46 UTC: 776 peticiones, 3,1 M de entrada, 64,5 K de salida, 0,09 USD. Es parcial: el test seguía en curso; el total esperado es de unas 1 114 peticiones y 4,6 M de tokens de entrada.",
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
  }
 ]
};
