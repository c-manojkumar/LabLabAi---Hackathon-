##OPEN API STUFF
OPENAI_API_KEY = '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'



## FLASK STUFF
class Config(object):
    DEBUG = True
    TESTING = False

class DevelopmentConfig(Config):
    SECRET_KEY = "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"


config = {
    'development': DevelopmentConfig,
    'testing': DevelopmentConfig,
    'production': DevelopmentConfig
}
