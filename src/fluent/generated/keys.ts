import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'app.css': {
                        table: 'sys_ux_theme_asset'
                        id: 'addd321ec8954194aed4cb8b3a57f009'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '7e6ccb8c1c104707a2d2ec700ca2efd3'
                    }
                    'br-vendor-request-defaults': {
                        table: 'sys_script'
                        id: 'cf3e35fa20e848368ccead8f1e54ef5e'
                    }
                    'br-vendor-request-notify': {
                        table: 'sys_script'
                        id: 'a9f808d506b64d1fb3a6680a83b67afe'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ee51964532764077a0bf6f2c55698765'
                    }
                    'src_server_vendor-request-rules_js': {
                        table: 'sys_module'
                        id: 'a54de0819bac4bc696e2b497fdfc148c'
                    }
                    'vendor-management-app': {
                        table: 'sys_ui_page'
                        id: 'bb8e0e61d22a4a29bccd2f5308df2856'
                    }
                    'vendor-sample-1': {
                        table: 'x_snc_sms_vendor'
                        id: 'b9a27d68ed6649398e852d5392641aef'
                    }
                    'vendor-sample-2': {
                        table: 'x_snc_sms_vendor'
                        id: 'f476ff01e0f1404bac7c908e1b7532dc'
                    }
                    'vendor-sample-3': {
                        table: 'x_snc_sms_vendor'
                        id: '6dba8d63658a40e9af331381961727b8'
                    }
                    'x_snc_sms/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'd5e4acecffac4b04988fe572d28edd76'
                    }
                    'x_snc_sms/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '7567f77cd06d4fdeb7adddd00e625670'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '01d86b36a59a409ba787e2cbe4220c17'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'replacing_vendor_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '032ca5dc105b47d5b8e76e63475dae96'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '062f043fbf344822a240183e6045e9b1'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '096421ab7c8f498bacdc7b893c80c333'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_fax'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0bb4986e8b1a45c595e1c9992c607e7b'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_fax'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0db4409ceeb64872ae8fc55839ad5c96'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0f9b4bdde9d440958b37a2c31dc616c4'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0fc0d397f5d14f9ca49edeb136c15328'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'zip_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11c3dd416b8543eba79872b821c68ccd'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'wbe_vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13ad0987101942f59ad6124ef036c57a'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'w9_ssn'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1515736ece44471aa38f44b32b2416a0'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'replacing_vendor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '15740d162d644d6db6083cce6dc5a399'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a5bcca2562543d99e572df15a830bf1'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c0ea59e9287473ea095756c1fb74b8c'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'wbe_vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1fc211bff97c48a0bfe63410d25e54b5'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_phone_ext'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '210e654c58984b04a961322a4a2e02f8'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '223d8c2c0a0c45d88751c367779e90e5'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'minority_owned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '25c5a15374794f85aa46f4964dd6c236'
                        key: {
                            name: 'x_snc_sms_vendor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '293556f01797414186c88e3d50c09d5e'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'mastercard_accepted'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a52f108474048afb3037d9bd8573a0f'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a8d570c8c0f4037b9b4688e6b420b77'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_contact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b51b6a10ebd4f1f90ed76f1aa60cade'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'category_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32ac8899726f4a0893893ccac9725ae0'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_used_for'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34a560e0311e46ee87f1ccb0a43c545c'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '357fbba503ae4235af2ef9c84d65c3db'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'zip_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b06bfd3b053463aa7ce9469625b032d'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'w9_ssn'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ca40a2e8caf4fe7a2891102660338b8'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3da7dbdb1819478ea579e7d3f1553e3a'
                        key: {
                            name: 'x_snc_sms_vendor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43928f7052d14eb4a2eea97b3951fc91'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_phone_ext'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '439298f2e2db4369b492f0d6d60616c3'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'group_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '444332eb4d8b4248b133102704eb77fa'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4509ce86d13d4ef0b931990820b2647b'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4623587d8faf47bc98a279b63a35911d'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'wbe_vendor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '472a63551a324986a1979981e839e3ad'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'minority_owned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '48dfb45249e14056918bb6abeb35417e'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '518d62b7a1f74be39917c7c08303b564'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'replacing_vendor_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '52245aad75cc45bebdc1aeafdf9f0651'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'priority'
                            value: 'urgent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5322a1d9e0914e01a583ada3f308a071'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5374cd10386848dba1365ad029a4304e'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_fax'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53fa002a44fa49b9beb19adae989d527'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5473235e06514bf8982200cbb8521a3a'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55159af7b467471eb15c17d7b61471e9'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_name_2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5767b1d8e9414742b56eea4fbd0052ca'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                            value: 'in_review'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57944c8a66da46a08d5df5f3a7219bdd'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'trade_station'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58424807934940ec9beb59c4fd410113'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'requested_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a1eb11401d848e286ae54e1620d9dea'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a2dab461e2f4e2598ff5cf38c2b185c'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'category_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61651d9f9d1149dda9e20100b1737400'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'requested_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62b7386f0455453fba4f0d366fa279fe'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'zip_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6856479ec226483a8d848b767c508298'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'certificate_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69a7a49c2511407783f595a860073083'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69d16078498a43098cc7f19e2d08cb82'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'wbe_vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c61f67b63bb48f78787a777398eb9e9'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'zip_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6da76b04ee654e87964efebca6ae80d0'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'trade_station'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6dd9979ca5434b3bae2df092a83f67d6'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6fe9c5ebae294257acfd297be987aee4'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'group_key'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ff8355e62464fdcbfcb651d7d80fa08'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'remit_address'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '70001c482fe64f9d8f594292a2dab290'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_name_2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '735e6eaa7850415488787f550c20d163'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7491becfe42149f99b6a69b20278e0d6'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7921d2332af541108809d5e9dd83a835'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_used_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a4dbfed06af43daaddc554f8379579e'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'group_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a5281fce0a345c5b5512c8b0e8501d6'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_used_for'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ad1ff53934d47de9fe8e69c1258c1d9'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ae3f848c4804d70b1a810059489e470'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'certificate_expiration'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c6750d421884d228ad92d45a20aba41'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d2aca0ed9cd4685a7381419a5c71218'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d93a4d4a3ad4db98a9188429f986ec9'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'category_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f4db160db3848cab116202dcaa6ea76'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'certificate_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '83a7fc411f3e42c8adabc89800f3f4d9'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '85350627f846497b954d628c3687fb1b'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86217dfc7ae94292b17cd2b986cdeec1'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'certificate_expiration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8682393a8cbd49508750c881a9072fb2'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '87437ae485344fd8afc752ed8387c1fd'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'category_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a250ea4b23e4a21a29452bb7092e7ff'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d70d448c989484b8fefff2f122e79a0'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e259f76bdf341fa8a1e2b987800b26f'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_phone_ext'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '90a290f2521b4b5fb704e094aa0fe451'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'approval_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '930ba32a8290406292f816749da8b244'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'mastercard_accepted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94785d6e9b874bc1851840f2777a8d3c'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'category_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94abc96882b34fb5b58f8d525713dd0d'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'remit_address'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94bdd7748ce842ea88ffd16f1a7141b5'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'certificate_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9501063ac2f74b5aacaf5e736486288a'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9717700ba4004fdd8684495f545cdd90'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '97f84e7bb759424fbf9d3849a1459c8f'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'status'
                            value: 'pending_approval'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '984b651ca87940f6b0157c57ea29392d'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_name_2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99ebe7d6b1f04b37a32ac14120ce4183'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_name_2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a29584ede3d4adc825d4ed2ca0ad738'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_name_3'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a2d8539f5164c6c8c5587e6627ff2ae'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c718f46d3734a75b1d8d1a01c95795c'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9e175448cbe64a3989554e0db128a577'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'replacing_vendor_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f85422c135f4dafa7750c900d3053a2'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a54813d358ef47c1b44e4f7198d71e15'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_name_3'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a61c407b5d114a7dba8006f3d666b207'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a79b2e51a69149b5ab8f3d71c001540d'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_fax'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a839a19706114e059fc7cd8e3158bc22'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'mastercard_accepted'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a94e7f65d32d4f4e88fdc5205c47a714'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'trade_station'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9d736cfc9a5451e9a34e834ff82601e'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'group_key'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aadf37199857455ea502c057b29635fa'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'abb0673e90c2436889331eea58e6ebc2'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'w9_ein'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b079689fb3a7455784fe2c08592008dc'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1a80208d40047c082adaa6f479e63e5'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'w9_ein'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2bcd9b379ca4224bfa120bb60b98235'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'certificate_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b61d49ac79c444cd9eed12d9542ddece'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8922fa51d744be38f69e5fd62b53179'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba44088fc5c04de2883dbe35a44da564'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'certificate_expiration'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bef3bd65b6534defa6749de47e007cd3'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'category_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bf2f75c489bd408eb71382dee5085348'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c271d64bdbdc43e1b4f68b5d3d881278'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c30a8cdd54e64f1ea76e15a4711ad3b0'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c73d6c7902c84598a6a774cd3384cfdf'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'w9_ein'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c872683d5fb2487fb5ef0b13f733e383'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'replacing_vendor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c9b0202c78064e2ead52c9aa27c6f6af'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                            value: 'pending_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c9d062a9065940a7a4335a7e51d1b70b'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'category_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca253da10bd044b3abc33712d29730ba'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb5719850273485f843745f44a66313f'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cccddf4a0f554c7f8e395639469f9220'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ccfca901d6c64331b0ea0813c3c17529'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cfe347f04fcc428495b13b1a1e94922c'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'remit_address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cff682ad2c9841958d1a18707d03ad9c'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_used_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd1c325326e29442692bb1d56dac74eef'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd39061a82d10423a801c991aab4f3680'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd72da24f69524030afbb58997398896d'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_contact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db36efcf88d64f28a7e291bcd5910a08'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'trade_station'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db61e2cd12664be89fd67ec3430f63ad'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'w9_ssn'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dbb80a0281ac476d8a6fcb83a84f4e43'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'minority_owned'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc83cb6c8c61408489c02d1a12c6d412'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_phone_ext'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dd2176cb4e324bde8efaacb4448b4f1b'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'remit_address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ddef7460580049ecbc358cb56e833aa4'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'df74fd96c2434d4c80c0db9f3c372767'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1dffb7aff1a4e15919cafdffec0cfde'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'replacing_vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e487ab6ee7d94d8689dc3404ec1fcbed'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'request_status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e5e5a13a4ca74ef8a9b0b099524b854f'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6fae825c1934b20a4978c129a3a55ee'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7abc3158c7a4d9ebd4706c89e664127'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'minority_owned'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e88192e98fc94e5790b498824f798b84'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_name_3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8fec487e82c4b9fa8fb1ad1148ef9a7'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'mastercard_accepted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9c989b2793a44cb974a31cc3e97cb88'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'vendor_name_3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea2b274a10f64c5f946c81cef01826db'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'category_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebdf19f08abf4247a78c06be155005c3'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'w9_ssn'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee1b18f851de4442a6369929bd5026e0'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'f09c18649552452fa2a0feb2a9bc9266'
                        key: {
                            category: 'x_snc_sms_vendor_request'
                            prefix: 'VR'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1354a1e544b48c2a9353668ac30eccb'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'approval_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1e2365f42f14cc097edef4b3fde5b41'
                        key: {
                            name: 'x_snc_sms_vendor_request'
                            element: 'w9_ein'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc7fd84204334c96a5e37630c80573e5'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'vendor_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff6c1fd9823b4a5d8260833e6adaf95f'
                        key: {
                            name: 'x_snc_sms_vendor'
                            element: 'certificate_expiration'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
