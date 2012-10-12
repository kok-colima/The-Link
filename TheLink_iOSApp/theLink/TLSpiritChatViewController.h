//
//  TLSpiritChatViewController.h
//  theLink
//
//  Created by Herzon Rodríguez on 04/octubre/2012.
//  Copyright (c) 2012 VanillaSys. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "TLGeneralViewController.h"

@interface TLSpiritChatViewController : TLGeneralViewController <UITableViewDataSource, UITableViewDelegate, UITextFieldDelegate> {
    NSMutableArray *_chat;
    NSArray *_spiritAnswers;
}

@property (nonatomic, retain) IBOutlet UITableView *tableView;

@property (nonatomic, retain) IBOutlet UITextField *textField;
@property (nonatomic, retain) IBOutlet UILabel *charsLeftLabel;

@property (nonatomic, retain) NSString *spiritName;

@property (nonatomic, retain) IBOutlet UIView *chatView;
@property (nonatomic, retain) IBOutlet UIView *sendingView;
@property (nonatomic, retain) IBOutlet UIImageView *activityImageView;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil spiritName:(NSString *)spiritName;

@end
