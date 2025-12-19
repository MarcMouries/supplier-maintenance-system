import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '02ef109b8e8842218f9557dd9035660d'
                    }
                    'br-vendor-request-defaults': {
                        table: 'sys_script'
                        id: '99dd419318314312bb4d914a0f2efb0c'
                    }
                    'br-vendor-request-notify': {
                        table: 'sys_script'
                        id: '814f680756dd4d3c9cf434ac3cb440d6'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '984122b0af6743f0b3737ac72a29a4e1'
                    }
                    'src_server_vendor-request-rules_js': {
                        table: 'sys_module'
                        id: '64c4b9a99e31409eaef0187ebe09d04e'
                    }
                    'vendor-management-app': {
                        table: 'sys_ui_page'
                        id: '95d8f8cbfd5045a5bf7ff637c1cbfc28'
                    }
                    'vendor-sample-1': {
                        table: 'x_snc_vendor_mto0s_vendor'
                        id: 'bb5d4cbe27524ad1913b6673e41b5680'
                    }
                    'vendor-sample-2': {
                        table: 'x_snc_vendor_mto0s_vendor'
                        id: 'e88f53a57fa944aeaf356d5a068e4a05'
                    }
                    'vendor-sample-3': {
                        table: 'x_snc_vendor_mto0s_vendor'
                        id: 'af37244301de4ea8b6bf38835937bba5'
                    }
                    'x_snc_vendor_mto0s/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'cc38981012cd49bf8b819f40a2b3e631'
                    }
                    'x_snc_vendor_mto0s/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '2aa0a2b8eccb401ba44ac39dc11999dd'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '00c24f5b0cb24339b8f91b1bf9eef98a'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05a5aac3a36540c980e9ae0cf37321c6'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0673bf3aca2f4258a45c32a9d002d996'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'requested_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '075b738843b24eb782873b5a3591474a'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'certificate_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a4eea2a692b43ee9ff8b80661597f0b'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'category_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '153cdf0808594282b6546cab45d35fdd'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '153f2410ba704f61a6dd85ed965781ae'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18da5ed123d949d2be2f26462512e005'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                            value: 'in_review'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19174101eece443a9bb862584542c832'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_name_3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e3453dd5e1c4bbfb1fb9bcb4a78e0c0'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'minority_owned'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ff83553c40748cfa72da3ce4165147b'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'category_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2060ea3f965e4559851e53cd74e5f8c6'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_fax'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20847bdc076f43b9bae48e56b72225a8'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '218a5195831548a4ace13fd15f3275d4'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'certificate_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '23471348e5384b389bd728dc1a93efe5'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23797bd7796f46bb9f46b3acd4e34a81'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '267cfe3ca7a74a5abf12d6aff1bde89b'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'remit_address'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '26a8fa35275c41598fb0572ddb203c47'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2919f4d1f06844cd9edfc72ad23054af'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2bf21f36de714afb87746e7b23d56462'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d93131c159543d282e11e486fca1dba'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'certificate_expiration'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e04f6334b8c498a9d3e7d3bc08e8e36'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'zip_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2fc97fdd86e04b359dd5f36036facb9e'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'group_key'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3190310ff7d5444ea40adb1d1dfb33ed'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'group_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31d2cbf645034589affb10de16dcd5ee'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_fax'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '320d19162c1840f49da43ef39ac05d89'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'mastercard_accepted'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32bc89b970cf4a54b8636003f777d18c'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '371579ad92bf4c53a68d17d3d3d56a41'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'w9_ssn'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39319d56c5f541e2a03506c373b6d93d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39e5c409de11466caa745fc83793e567'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'category_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a242426302247a4b78cebab89b150e1'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_contact'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3b3bbb00b0414ca782d838e61a392678'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ba1662727aa4f219c7d261e34e2e10c'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'minority_owned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f26013ec2484ee5b1163ada2676fc57'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4016e83f266b43d58a75e2e9207e184a'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'mastercard_accepted'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '40a5a2ed7b77423f846b932800aef579'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42795f33121c4bf897148b00c445aea4'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'category_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43cfdae363b04061b382faa338e19327'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'remit_address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44d4d8815e114d7e8c35e6b325402cac'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'w9_ssn'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47b0c89774364a80bbb9459c9c497dff'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49aa0b59f1474fc681d36465847c77d2'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ab46a2705224548b4126badf7c2361a'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4bf3ca8e2db244f8a3c16e231cccc0f2'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'requested_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d22a81fd8b74e52b846cbe1cde01deb'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e10eac305354f82ad25be2e4eb5157d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'certificate_expiration'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e39cbe5c7a74609ad26475ffe62b764'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e9b45553c184019bc4ec15909f4d5db'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'zip_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f9fdb093cd14383ad00e8dc805c7765'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'replacing_vendor_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50e6025515784a56bd3632ee09efbe0d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_name_3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51ccdff354ac4a56b4a637aedac0432f'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'category_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '553627f83cb04800a4ae7487e1e2dad0'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5784467d0aec4cc5a23782442f77e60e'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'w9_ein'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '58ff1f241cca47388bf0f7a922b3fb98'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '59e0633ed7af47039ec85fe6bc6661bc'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_name_2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d47f8e0c0ed460c9018db53c06562e0'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_name_3'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ec5daa103d0491f88cc78d09379e152'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'wbe_vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6295a90b7cc24fd5a09837a53c24483b'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_used_for'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '64aad0349e164757a8ce7a47ffee5000'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67577500e0c2419abbcf193efed0729d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '67afba4f783749c6b08bdef3a18995af'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '692186de38a64e29bf95bef0e6642292'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'zip_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '697a61219a5d444782185db4af25c77d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'priority'
                            value: 'urgent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69cae0d356c04d4eb64838459be8b1da'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_phone_ext'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b7eb946e16242b9b7756dc31db70a5a'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'certificate_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e63f97f08b24212928df22ae1708e40'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_fax'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ea7ed280f794aba9e45d2da14f3f2cc'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '702e51d2d6bd4bd68efeb25dc0fe2fd2'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'replacing_vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70ec7391340244349c4f07092c7a04d7'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70f330b88188498dbe72a959039a8689'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'trade_station'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '71766beaf75f407fbfc7bab605d0aba4'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '725136ecf911491085961d6119bf3dbc'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'replacing_vendor_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '725747a6e0204445aa15ed7282b6b9b4'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_used_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75ae1ed5453d480283e279ce1d39c08b'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '773ee4a843b4471bb6970e031e67214b'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'category_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '778f1ba334404e93a240aedf69bcfba4'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_name_3'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7918269b30c44f29841eeb74af0b0923'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'zip_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7dce7fa9eb48449282ed5db6da66c92a'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_phone_ext'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f1769775b844eb0b1f5c23e75a7a934'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'group_key'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '81efc74ba57e4279b2190de27c156f97'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '844c896575b449468e5556dc6f63ceb9'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'w9_ein'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '86a08050adb54df59d9c7da534324c77'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'status'
                            value: 'pending_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '898252f9c9b442e9a7498157f9d27644'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_phone_ext'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b36deacf9fe436885195ca7f6dbecf8'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8feb10eee64042af86530e50c2c8caa9'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'w9_ein'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92a08918d9b9474eb2b52c971da32f1e'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'certificate_expiration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9411f7882269405f826802155beba7ce'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                            value: 'pending_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '95529ebd308f48fe9348db9ad977b41d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'replacing_vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '955b6b3b6bac4e98841ce824882f7771'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'minority_owned'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a1871b400b8436993dc141bd2b0f907'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'wbe_vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a792e22455f4429815616b4d09aa353'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a8092cfb9f64caca291d6dacb52107d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_name_2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'a12e792389654eec9eb7c1c0b819aa95'
                        key: {
                            category: 'x_snc_vendor_mto0s_vendor_request'
                            prefix: 'VR'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1a2b96dfb94421c928a78a6307d781f'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'replacing_vendor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1d2702c8d834101940398f43975bef0'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'group_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a281063d25d643f89d8ea98d8f0a2e44'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a58ab3da7f444bef9b6ad11abcdc2cff'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'replacing_vendor_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5fc39da351b4c5cb6c21fb564debfb9'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'remit_address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7278676550d4e70bffef0e16ca3c970'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'trade_station'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7b3657a59f64e0cb295f01fe3976423'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a84f44044d3645c19fb5d4ad0232e476'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'w9_ssn'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac5262160610493a90ad6e9c4f6222d4'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'w9_ssn'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad7a1353f6c447c997fbad63dd747266'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_name_2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b068503be8094c3db38324d3507c01ab'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b06fa6f631fc4f5da20bca97e97cb355'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b28f75d8662640d6a51c0436530d03d8'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2a88a1b7598405c94971f8aae0028b0'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'category_description'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b689f7cadb0b4f7e8e9f73051a390750'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b742786b139f473197e57e39d869ebad'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_fax'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb114238cb174a998e92ffff8333083c'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'trade_station'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bdb72d361af34591b7093cd6331816ea'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'wbe_vendor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdc9d58e78404bd590421827a7c3caac'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_phone_ext'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be31cecdef86422c884b2393dcf66a68'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c084a44bf0ae4149b5645977bf3885fc'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'approval_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2164fa2074c487f81413b5f8ce08083'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'approval_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c50598fed3524d69a81712372af764cf'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6633f0018e143708144ee51e3184eca'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_name_2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c7bae38a016445ddb2014183ebc62991'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c828e1826b024683a9a362ffa6149809'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'certificate_expiration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca3b14886e524e5bb50664a137766c4d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf2220f83f924830a9b1420e877c09cf'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'w9_ein'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf7c79c779a249d3b4c2569cee899366'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2ac15e4a813463996e73bbb538f3248'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3dc93a21d0d45898c72f458db2c4580'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'mastercard_accepted'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd48219a0d18645f8b5f6e3799b163f6e'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'minority_owned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd686056151f143b5a5a925d746f1ac0c'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd76bbbdd08094de994a0c6eda0359a3d'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9a6be99e59d444eb3c6dc6e03b85880'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db1f008701b447c9a89edc9bf4c479da'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'remit_address'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc92938071794da081be885a40699a7a'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'certificate_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de6bfdfb02da49b8957e8a830d8d1453'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_contact'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'deda00abc72d4a1db0836d3677757163'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e084980bd7c6435695fd26c2610102b5'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'request_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2c948a6955043d2a524599c37834215'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'trade_station'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e65486b728a84536bbc891e6eec27625'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'mastercard_accepted'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6e4c83a4afe47be8ccb306c06d8eb7e'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e885edb5e344404e927545039ab9efba'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8c80cb42d1d4b45956a98f0aeec4122'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'wbe_vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eadb0774895f434a9ae61490410a532f'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed07c20a50e04c4dbe6af538f453ff6e'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0257e50c62a433faf4e4719661276eb'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'category_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2bd2eda898843179b3887b754641c41'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_used_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5c376654927455d944735a2028c5d11'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f81a9800793341fab71b72193dfb0821'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_used_for'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9ce87e912bf4a7189c5b9feec55a356'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc678d14cc074ef892769f39c289f85a'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor_request'
                            element: 'vendor_phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff655b5782fa471195e4878a6a729ccd'
                        key: {
                            name: 'x_snc_vendor_mto0s_vendor'
                            element: 'vendor_id'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
